const express = require("express");
const router = express.Router();
const PropertiesServices = require("./../services/propertiesService");
const service = new PropertiesServices();
const validatorHandler = require("./../middlewares/validator.handler");
const {
  createPropertySchema,
  updatePropertySchema,
  getPropertySchema,
} = require("./../schemas/properties.schema");

// query params
router.get("/", async (req, res, next) => {
  // path: http://localhost:5050/properties?limit=10&offset=20
  try {
    const properties = await service.find();
    res.json(properties);
  } catch (error) {
    next(error);
  }
});

// router.get("/", async (req, res) => {
//   // path: http://localhost:5050/properties?limit=10&offset=20
//   const { limit, offset } = req.query;
//   if (limit && offset) {
//     res.json({
//       limit,
//       offset,
//     });
//   } else {
//     res.json("No hay query params");
//   }
// });

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const property = await service.findOne(id);
  console.log({ property, id });
  res.json(property);
});

router.post("/", async (req, res) => {
  const body = req.body;
  const product = await service.create(body);
  res.json(product);
});

router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { body } = req;
  const property = await service.update(id, body);
  res.json(property);
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  const property = await service.delete(id);
  res.json(property);
});

module.exports = router;
