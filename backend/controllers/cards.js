const Card = require('../models/card');
const NotFoundError = require('../errors/NotFoundError');
const BadRequestError = require('../errors/BadRequestError');
const ForbiddenRequestError = require('../errors/ForbiddenRequestError');

const getCards = (req, res, next) => {
  Card.find({})
    .then((cards) => {
      res.status(200).send(cards);
    })
    .catch((err) => {
      console.log(err.name);
      next(err);
    });
};

const createCard = (req, res, next) => {
  const {
    name,
    link,
    likes,
    createdAt,
  } = req.body;

  const CurrentUserId = req.user._id;

  Card.create({
    name,
    link,
    owner: CurrentUserId,
    likes,
    createdAt,
  })
    .then((card) => res.status(200).send(card))
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'ValidationError') {
        next(new BadRequestError(`${Object.values(err.errors).map((error) => error.message).join(', ')}`));
      }
      next(err);
    });
};

const deleteCard = (req, res, next) => {
  const { _id } = req.params;
  const CurrentUserId = req.user._id;

  Card.findById(_id)
    .orFail(new NotFoundError(`Карточка с указанным id:${_id} не найдена`))
    .then((card) => {
      if (card.owner.toString() === CurrentUserId) {
        return card.remove();
      }

      return Promise.reject(new ForbiddenRequestError('Ошибка! Попытка удалить чужую карточку'));
    })
    .then(() => {
      res.status(200).send({ message: 'Карточка успешно удалена.' });
      console.log('success delete!');
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Введен неккоретный id при попытке удаления карточки'));
      }
      console.log(err.name, err.status, err.code);
      next(err);
    });
};

const likeCard = (req, res, next) => {
  const { _id } = req.params;
  const CurrentUserId = req.user._id;

  Card.findByIdAndUpdate(
    _id,
    { $addToSet: { likes: CurrentUserId } },
    { new: true },
  )
    .orFail(new NotFoundError('Передан несуществующий id карточки'))
    .then((card) => {
      res.status(200).send(card);
      console.log('Like!');
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new BadRequestError('Введен неккоретный id при попытке постановки лайка карточки'));
      }
      next(err);
    });
};

const dislikeCard = (req, res, next) => {
  const { _id } = req.params;
  const CurrentUserId = req.user._id;

  Card.findByIdAndUpdate(
    _id,
    { $pull: { likes: CurrentUserId } },
    { new: true },
  )
    .orFail(new NotFoundError('Передан несуществующий id карточки'))
    .then((card) => {
      res.status(200).send(card);
      console.log('dislike!');
    })
    .catch((err) => {
      console.log(err.name);
      if (err.name === 'CastError') {
        next(new BadRequestError('Введен неккоретный id при попытке постановки дизлайка карточки'));
      }
      next(err);
    });
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
};
