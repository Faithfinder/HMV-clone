const faker = require("faker");
const { getObjectId } = require("../helper");

const users1 = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("User" + value),
        isAdmin: false,
        email: faker.internet.email(),
        facebookId: faker.random.uuid()
    };
});

const users2 = [10, 20, 30, 40, 50].map(value => {
    return {
        _id: getObjectId("User" + value),
        isAdmin: false,
        email: faker.internet.email(),
        facebookId: faker.random.uuid()
    };
});

module.exports = users1.concat(users2)