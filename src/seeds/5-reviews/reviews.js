const faker = require("faker");
const { getObjectId } = require("../helper");

const reviews1 = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("Review" + value),
        rating: faker.random.number({ min: 1, max: 5 }),
        createdAt: new Date(),
        author: getObjectId("User" + value),
        content: faker.lorem.paragraphs(5)
    };
});

const reviews2 = [10, 20, 30, 40, 50].map(value => {
    return {
        _id: getObjectId("Review" + value),
        rating: faker.random.number({ min: 1, max: 5 }),
        createdAt: new Date(),
        author: getObjectId("User" + value),
        content: faker.lorem.paragraphs(5)
    };
});

module.exports = reviews1.concat(reviews2);
