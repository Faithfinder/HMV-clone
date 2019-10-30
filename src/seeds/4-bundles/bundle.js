const { getObjectIds } = require("../helper");

module.exports = {
    title: "Half price!",
    items: getObjectIds([
        "Bundled1",
        "Bundled2",
        "Bundled3",
        "Bundled4",
        "Bundled5"
    ]),
    discount: 50
};
