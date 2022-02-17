const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ConflictRequestError = require('../errors/ConflictRequestError');

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      next(err);
    });
};

const getUser = (req, res, next) => {
  const { _id } = req.params;

  User.findById(_id)
    .orFail(new NotFoundError(`Пользователь с указанным id:${_id} не найден`))
    .then((user) => {
      res.status(200).send(user);
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new BadRequestError('Неккоректное значение Id пользователя'));
      }
      next(err);
    });
};

const createUser = (req, res, next) => {
  const {
    email,
    password,
    name,
    about,
    avatar,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => {
      User.create({
        email,
        password: hash,
        name,
        about,
        avatar,
      })
        .then((user) => {
          res.status(200).send(user);
          console.log('new user successfully created!');
        })
        .catch((err) => {
          console.log(err.name, err.code, err.status);
          if (err.name === 'ValidationError') {
            next(new BadRequestError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
          } else if (err.code === 11000 && err.name === 'MongoServerError') {
            next(new ConflictRequestError('Ошибка! Пользователь с такой почтой уже существует.'));
          }
          next(err);
        });
    })
    .catch(next);
};

const login = (req, res, next) => {
  const { email, password } = req.body;

  return User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.cookie('jwt', token, {
        maxAge: 3600000 * 24 * 7,
        httpOnly: true,
        sameSite: true,
      })
        .status(200).send(user);
      console.log('signin success!');
    })
    .catch((err) => {
      console.log(err.name, err.status, err.code);
      next(err);
    });
};

const logout = (req, res) => {
  res.cookie('jwt', '')
    .send({ message: 'Вы вышли из аккаунта' });
  console.log('logout system success');
};

const getCurrentUser = (req, res, next) => {
  const CurrentUserId = req.user._id;

  User.findById(CurrentUserId)
    .orFail(new NotFoundError(`Пользователь с указанным id:${CurrentUserId} не существует`))
    .then((user) => {
      res.status(200).send(user);
      console.log(user);
    })
    .catch((err) => {
      console.log(err.name, err.status, err.code);
      next(err);
    });
};

const updateUser = (req, res, next) => {
  const { name, about } = req.body;
  const CurrentUserId = req.user._id;

  User.findByIdAndUpdate(CurrentUserId, { name, about }, { new: true, runValidators: true })
    .orFail(new NotFoundError(`Пользователь с указанным id:${req.user._id} не существует`))
    .then((user) => {
      res.status(200).send(user);
      console.log('user profile update!');
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные значения при обновлении пользователя'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      }
      next(err);
    });
};

const updateAvatar = (req, res, next) => {
  const { avatar } = req.body;
  const CurrentUserId = req.user._id;

  User.findByIdAndUpdate(CurrentUserId, { avatar }, { new: true, runValidators: true })
    .orFail(new NotFoundError(`Пользователь с указанным id:${CurrentUserId} не существует`))
    .then((user) => {
      res.status(200).send(user);
      console.log('user avatar update!');
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new BadRequestError('Переданы некорректные значения при обновлении аватара пользователя'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      }
      next(err);
    });
};

module.exports = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  updateAvatar,
  login,
  getCurrentUser,
  logout,
};
