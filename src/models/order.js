import mongoose from "mongoose";
import autoNumber from "mongoose-auto-number";

import emailTemplate from "../util/email";
import nodemailer from "../config/nodemailer";

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
    user: {
        id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
        email: { type: String }
    },
    total: { type: Number, default: 0 },
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

orderSchema.post("save", async doc => {
    const email = emailTemplate(doc);
    try {
        await nodemailer.sendMail(email);
    } catch (error) {
        console.log(error);
    }
});

const Order = mongoose.model("Order", orderSchema);
module.exports = Order;
//Weird export/import behaviour
