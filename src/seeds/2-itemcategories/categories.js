const { getObjectId } = require("../helper");

const categories = ["Music", "Cinema", "TV Show"].map(name => {
    return { _id: getObjectId(name), title: name };
});

module.exports = categories;
