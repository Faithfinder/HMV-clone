import mongoose from "mongoose";
import autoNumber from "mongoose-auto-number";

autoNumber.init(mongoose.connection);

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
    total: { type: Number },
    fulfilled: { type: Boolean, default: false },
    labels: [{ type: String }]
});

orderSchema.plugin(autoNumber.plugin, "Order");

orderSchema.pre("save", function(next) {
    this.items.forEach(item => {
        this.total += item.price * item.amount;
    });
    next();
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
//Weird export/import behaviour
