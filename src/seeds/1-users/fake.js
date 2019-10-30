const faker = require("faker");
const { getObjectId } = require("../helper");

module.exports = [1, 2, 3, 4, 5].map(value => {
    return {
        _id: getObjectId("User" + value),
        isAdmin: false,
        email: faker.internet.email(),
        facebookId: faker.random.uuid()
    };
});
