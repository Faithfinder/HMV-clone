import express from "express";
const app = express();
import bodyParser from "body-parser";
import errorHandler from "./handlers/error";
import itemsRoutes from "./routes/items";
import itemCategoriesRoutes from "./routes/itemCategories";

app.use(bodyParser.json());

app.use("/items", itemsRoutes);
app.use("/itemCategories", itemCategoriesRoutes);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use((req, res, next) => {
    let err = new Error("Resource not found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log(`Server is starting on port ${process.env.PORT}`);
});
