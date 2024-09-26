const mongoose = require("mongoose"); 

const roomSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    type: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    pricePerDay: {
        type: Number,
        required: true,
    },
    doubleBed: {
        type: Number,
        required: true,
    },
    singleBed: {
        type: Number,
        required: true,
    },
    maxGuests: {
        type: Number,
        required: true,
    },
    imgUrls: [],
    currentBookings: [],
    features: [],
}, {
    timestamps: true,
});

const roomModel = mongoose.model("rooms", roomSchema);


module.exports = roomModel;
