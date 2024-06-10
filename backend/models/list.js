const mongoose = require("mongoose");

const listSchema = mongoose.Schema({
    text : {
        type: String,
        required: true
    }
})
const list = mongoose.model("list", listSchema);

module.exports = list;