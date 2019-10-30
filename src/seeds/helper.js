const { ObjectId } = require("mongodb");
const { createHash } = require("crypto");

const getObjectId = name => {
    const hash = createHash("sha1")
        .update(name, "utf8")
        .digest("hex");

    return new ObjectId(hash.substring(0, 24));
};

const getObjectIds = names => {
    return names.map(name => getObjectId(name));
};

module.exports = {
    getObjectId,
    getObjectIds
};
