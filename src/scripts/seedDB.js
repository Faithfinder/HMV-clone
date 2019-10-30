process.env.DEBUG = "mongo-seeding";

const { Seeder } = require("mongo-seeding");
const path = require("path");

(async () => {
    try {
        const seeder = new Seeder({
            database: process.env.MONGODB_URI,
            dropDatabase: true
        });

        const pathToSeeds = path.join(__dirname, "../seeds");
        const collections = seeder.readCollectionsFromPath(pathToSeeds);
        await seeder.import(collections);
    } catch (err) {
        console.log("Error", err);
    }
})();
