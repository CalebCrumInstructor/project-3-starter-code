const { Schema, model } = require('mongoose');

const campaignSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    owner: {
        type: String,
        trim: true
    },
    description: {
        type: String,
        trim: true,
    },

});

const Campaign = model('Campaign',  campaignSchema);

module.exports = Campaign;