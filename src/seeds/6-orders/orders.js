const faker = require("faker");
const { getObjectId } = require("../helper");

let reviewedTotal = 0;
const reviewdItems = [1, 2, 3, 4, 5].map(value => {
    const price = Number(faker.commerce.price());
    reviewedTotal += price;
    return {
        id: getObjectId("Reviewed" + value),
        price,
        title: faker.commerce.productName(),
        amount: faker.random.number()
    };
});

let bundledTotal = 0;
const bundledItems = [1, 2, 3, 4, 5].map(value => {
    const price = Number(faker.commerce.price());
    bundledTotal += price;
    return {
        id: getObjectId("Bundled" + value),
        price,
        title: faker.commerce.productName(),
        amount: faker.random.number()
    };
});

module.exports = [
    {
        number: faker.random.number(),
        items: reviewdItems,
        user: getObjectId("User1"),
        email: faker.internet.email(),
        total: reviewedTotal,
        fulfilled: false,
        labels: []
    },
    {
        number: faker.random.number(),
        items: bundledItems,
        user: getObjectId("User1"),
        email: faker.internet.email(),
        total: bundledTotal,
        fulfilled: true,
        labels: ["tagged"]
    }
];
