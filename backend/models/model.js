const mongoose = require("mongoose")

const mySchema = mongoose.Schema({
    image: String,
    name: String,
    price: Number,
    isPrice: {
        default: false,
        type: Boolean
    }
})

let myModel = mongoose.model("coloshop", mySchema)

module.exports = myModel
