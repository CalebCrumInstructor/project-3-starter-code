const { Schema, model } = require('mongoose');

const presetsSchema = new Schema({
    type: {
        type: String,
        required: true,
        trim: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    notes: {
        type: String,
        trim: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
});

const Presets = model('Presets',  presetsSchema);

module.exports = Presets;