const faker = require("faker");
const { getObjectIds } = require("../helper");

module.exports = {
    title: "Half price!",
    image: `https://picsum.photos/seed/${faker.random.number()}/250/250`,
    description: faker.lorem.paragraph(3),
    price: Number(faker.commerce.price()),
    __t: "Bundle",
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
