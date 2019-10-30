const faker = require("faker");
const { getObjectId } = require("../helper");

const nestedItems = ["Music", "Cinema", "TV Show"].map(category => {
    return [1, 2, 3, 4, 5].map(() => {
        return {
            title: faker.commerce.productName(),
            description: faker.lorem.paragraph(3),
            price: Number(faker.commerce.price()),
            featured: faker.random.boolean(),
            category: getObjectId(category),
            reviews: []
        };
    });
});

module.exports = nestedItems.flat();
