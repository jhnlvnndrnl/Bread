const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
});

const itemModel = mongoose.model("Item", itemSchema);
module.exports = itemModel;