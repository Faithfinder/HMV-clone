const faker = require("faker");
const config = require("../../config")


const nestedItems = config.itemCategories.map(category => {
    return [1, 2, 3, 4, 5].map(() => {
        return {
            title: faker.commerce.productName(),
            description: faker.lorem.paragraph(3),
            image: faker.image.imageUrl(250, 250),
            price: Number(faker.commerce.price()),
            category: category,
            reviews: []
        };
    });
});

module.exports = nestedItems.flat();
