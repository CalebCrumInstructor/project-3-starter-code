const { Schema, model } = require('mongoose');

const playerSheetSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: String,
        trim: true
    },
    // capaign_id: {
    //     type: String,
    //     trim: true
    // },
    description: {
        type: String,
        trim: true,
    },
    // general_notes: {
    //     type: String,
    //     trim: true,
    // },
    // session_notes: {
    //     type: String,
    //     trim: true,
    // },
    // createdAt: {
    //     type: Date,
    //     default: Date.now,
    // },
    // updatedAt: {
    //     type: Date,
    //     default: Date.now,
    // },
});

const PlayerSheet = model('PlayerSheet',  playerSheetSchema);

module.exports = PlayerSheet;