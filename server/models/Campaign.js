const { Schema, model } = require('mongoose');

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },
    general_notes: {
        type: String,
        trim: true,
    },
    session_notes: {
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

//const Campaign = mongoose.model('Campaign',  campaignSchema);
const Campaign = model('Campaign',  campaignSchema);

module.exports = Campaign;