const faker = require("faker");
const { getObjectId } = require("../helper");

module.exports = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("Reviewed" + value),
        title: "Reviewed " + faker.commerce.productName(),
        image: `https://picsum.photos/seed/${faker.random.number()}/250/250`,
        description: faker.lorem.paragraph(3),
        price: Number(faker.commerce.price()),
        category: "Video",
        reviews: [
            getObjectId("Review" + value),
            getObjectId("Review" + value * 10)
        ]
    };
});
