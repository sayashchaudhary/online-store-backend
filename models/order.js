const mongoose = require("mongoose");
const {ObjectId} = mongoose.Schema;

const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const productCart = mongoose.model("ProductCart", ProductCartSchema);

const orderSchema = new mongoose.Schema({
        products: [ProductCartSchema],
        transaction_id: {},
        amount: {
            type: number
        },
        address: String,
        updated: Date,
        user: {
            type: ObjectId,
            ref: "User"
        }
    }, {timestamp: true}
);

const order = mongoose.model("Order", orderSchema);

module.exports = {Order, ProductCart};
