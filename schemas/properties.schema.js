const Joi = require("joi");

const id = Joi.string();
const name = Joi.string();
const price = Joi.number().integer().min(500);

const createPropertySchema = Joi.object({
  name: name.required(),
  price: price.required(),
});

const updatePropertySchema = Joi.object({
  name: name.required(),
});

const getPropertySchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createPropertySchema,
  updatePropertySchema,
  getPropertySchema,
};
