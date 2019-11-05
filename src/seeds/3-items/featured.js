const faker = require("faker");
const config = require("../../config");

module.exports = [1, 2, 3, 4, 5].map(() => {
    return {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(3),
        image:
            faker.image.imageUrl(250, 250, "", true, true),
        price: Number(faker.commerce.price()),
        featured: {
            image:
                faker.image.imageUrl(1600, 400, "", true, true),
            caption: faker.lorem.sentence(10)
        },
        category: faker.random.arrayElement(config.itemCategories),
        reviews: []
    };
});
