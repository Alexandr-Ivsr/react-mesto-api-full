const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

router.get('/', getCards);
router.post('/', celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    link: Joi.string().required().pattern(/^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w.-]+)+[\w\-._~:/?#[\]@!$&'()*+,;=.]+$/m),
  }),
}), createCard);
router.delete('/:_id', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
}), deleteCard);
router.put('/:_id/likes', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
}), likeCard);
router.delete('/:_id/likes', celebrate({
  params: Joi.object().keys({
    _id: Joi.string().length(24).hex(),
  }),
}), dislikeCard);

module.exports = router;
