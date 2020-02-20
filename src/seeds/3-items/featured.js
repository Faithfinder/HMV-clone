const faker = require("faker");
const config = require("../../config");

module.exports = [1, 2, 3, 4, 5].map(() => {
    return {
        title: faker.commerce.productName(),
        description: faker.lorem.paragraph(3),
        image: `https://picsum.photos/seed/${faker.random.number()}/250/250`,
        price: Number(faker.commerce.price()),
        isFeatured: true,
        featured: {
            image: `https://picsum.photos/seed/${faker.random.number()}/1600/400`,
            caption: faker.lorem.sentence(10)
        },
        category: faker.random.arrayElement(config.itemCategories),
        reviews: []
    };
});
