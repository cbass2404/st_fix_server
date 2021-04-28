const mongoose = require("mongoose");

const contentSchema = new mongoose.Schema({
    step: {
        type: String,
        default: "",
    },
    header: {
        type: String,
        default: "",
    },
    image: {
        type: String,
        default: "",
    },
    textContent: {
        type: String,
        default: "",
    },
});

const tutorialSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
    },
    name: {
        type: String,
        default: "",
    },
    content: [contentSchema],
});

mongoose.model("Tutorial", tutorialSchema);
