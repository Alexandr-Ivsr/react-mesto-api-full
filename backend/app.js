require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const { celebrate, errors, Joi } = require('celebrate');
const cookieParser = require('cookie-parser');
const { requestLogger, errorLogger } = require('./middleware/logger');
const UsersRouter = require('./routes/users');
const CardsRouter = require('./routes/cards');
const errorHandler = require('./middleware/error-handler');
const { createUser, login, logout } = require('./controllers/users');
const auth = require('./middleware/auth');
const NotFoundError = require('./errors/NotFoundError');
const corsHandler = require('./middleware/corsHandler');

const { PORT = 3000 } = process.env;

const app = express();

app.use(corsHandler);
app.use(cookieParser());
app.use(bodyParser.json());
app.use(requestLogger);

// краш-тест сервера для ревью
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});
app.post('/signup', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
    avatar: Joi.string().pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/m),
  }),
}), createUser);
app.post('/signin', celebrate({
  body: Joi.object().keys({
    email: Joi.string().required(),
    password: Joi.string().required().min(8),
  }),
}), login);
app.get('/signout', logout);

app.use(auth);
app.use('/users', UsersRouter);
app.use('/cards', CardsRouter);
app.use((req, res, next) => {
  next(new NotFoundError('Ошибка! запрашиваемая страница не найдена'));
});
app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('mongoDB connection sucessfull');
})
  .catch(() => {
    console.log('mongoDB connection error');
  });

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
