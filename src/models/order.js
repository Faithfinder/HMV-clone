import mongoose from "mongoose";
import autoNumber from "mongoose-auto-number";

import Item from "./item";
import asyncForEach from "../util/asyncForEach";

const orderSchema = new mongoose.Schema({
    number: {
        type: Number,
        autoIncrement: true
    },
    items: [
        {
            id: { type: mongoose.Schema.Types.ObjectId, ref: "Item" },
            price: { type: Number },
            title: { type: String },
            amount: { type: Number, default: 1, min: 1 }
        }
    ],
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    email: { type: String },
    total: { type: Number, default: 0 },
    fulfilled: { type: Boolean, default: false },
    labels: [{ type: String }]
});

orderSchema.plugin(autoNumber.plugin, "Order");

orderSchema.pre("save", async function(next) {
    if (this.isNew) {
        await populateOrderfromDB(this, next);
    }
    next();
});

async function populateOrderfromDB(order, next) {
    await asyncForEach(order.items, async item => {
        try {
            const dbItem = await Item.findById(item.id);
            // eslint-disable-next-line require-atomic-updates
            item.price = dbItem.price;
            // eslint-disable-next-line require-atomic-updates
            item.title = dbItem.title;
            order.total += item.price * item.amount;
        } catch (err) {
            next(err);
        }
    });
}

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
//Weird export/import behaviour
