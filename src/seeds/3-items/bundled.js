const faker = require("faker");
const { getObjectId } = require("../helper");

module.exports = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("Bundled" + value),
        title: "Bundled " + faker.commerce.productName(),
        image: faker.image.imageUrl(250, 250, "", true, true),
        description: faker.lorem.paragraph(3),
        price: Number(faker.commerce.price()),
        category: "Music",
        reviews: []
    };
});
