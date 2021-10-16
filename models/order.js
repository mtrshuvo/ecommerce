const {Schema, model} = require("mongoose");
const { CartItemSchema } = require("./cartItem");

module.exports.Order = model("Order", Schema({
    cartItem: [
        CartItemSchema
    ],
    transaction_id: {
        type: String,
        unique: true,
    },
    address:{
        phone:String,
        address1:String,
        address2:String,
        city:String,
        state:String,
        postcode:Number,
        country:String
    },
    status: {
        type: String,
        enum: ["pending", "complete"],
        default: "pending"
    },
    user: {
        type: Schema.Types.ObjectID,
        ref: "User"
    },
    sessionKey: String
},{ timestamps: true }))