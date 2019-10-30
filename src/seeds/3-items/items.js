const faker = require("faker");
const { getObjectId } = require("../helper");

module.exports = {
    title: faker.commerce.productName(),
    description: faker.lorem.paragraph(3),
    price: Number(faker.commerce.price()),
    featured: faker.random.boolean(),
    category: getObjectId("Music"),
    reviews: []
};
