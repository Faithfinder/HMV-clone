const faker = require("faker");
const { getObjectIds } = require("../helper");

module.exports = {
    title: "Half price!",
    image: faker.image.imageUrl(250, 250),
    description: faker.lorem.paragraph(3),
    price: Number(faker.commerce.price()),
    category: "Games",
    items: getObjectIds([
        "Bundled1",
        "Bundled2",
        "Bundled3",
        "Bundled4",
        "Bundled5"
    ]),
    discount: 50
};
