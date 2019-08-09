const mongoose = require("mongoose");
const url = new mongoose.Schema({
    longUrl: {
        type: String
    },

    shortCode: {
        type: String
    },

    shortUrl: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
    }
})

const urlSchema = mongoose.model('urlSchema', url);

module.exports = urlSchema;