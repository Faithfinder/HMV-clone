const faker = require("faker");
const { getObjectId } = require("../helper");

module.exports = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("Bundled" + value),
        title: "Bundled " + faker.commerce.productName(),
        description: faker.lorem.paragraph(3),
        price: Number(faker.commerce.price()),
        featured: faker.random.boolean(),
        category: getObjectId("Music"),
        reviews: []
    };
});
