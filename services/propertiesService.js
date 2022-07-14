const boom = require("@hapi/boom");

class PropertiesServices {
  constructor() {
    this.properties = [];
    this.generate();
  }

  async generate() {
    for (let i = 0; i <= 10; i++) {
      this.properties.push({
        id: String(Math.random(1) + 4),
        name: `property ${i}`,
      });
    }
  }

  async create(data) {
    const newProperty = {
      id: Date.now().toString(36) + Math.random(10).toString(36),
      ...data,
    };

    this.properties.push(newProperty);
    return newProperty;
  }

  async find() {
    return this.properties;
  }

  async findOne(id) {
    const finById = this.properties.find((property) => {
      if (property.id === id) {
        return property;
      } else {
        throw boom.notFound("not found property");
      }
    });
    return finById;
  }

  async update(id, changes) {
    const propertyIndex = this.properties.findIndex((item) => item.id === id);
    if (propertyIndex === -1) {
      throw boom.notFound("not found property");
    }
    const property = this.properties[propertyIndex];

    this.properties[propertyIndex] = {
      ...property,
      ...changes,
    };

    console.log(this.properties[propertyIndex]);

    return this.properties[propertyIndex];
  }

  async delete(id) {
    const property = this.properties.findIndex((item) => item.id === id);
    if (property === -1) {
      throw boom.notFound("not found property");
    }
    this.properties[property].slice(0, 1);
    return { message: "the property " + id + "was deleted" };
  }
}

module.exports = PropertiesServices;
