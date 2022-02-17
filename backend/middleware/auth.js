const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/UnauthorizedError');

const auth = (req, res, next) => {
  const token = req.cookies.jwt;
  let payload;

  if (!token) {
    next(new UnauthorizedError('Ошибка! Необходима авторизация.'));
  }

  try {
    payload = jwt.verify(token, 'some-secret-key');
  } catch (err) {
    console.log(err.name);
    next(new UnauthorizedError('Ошибка! Необходима авторизация.'));
  }
  req.user = payload;

  next();
};

module.exports = auth;
