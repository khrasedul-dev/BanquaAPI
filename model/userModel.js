const mongoose = require('mongoose')

const s = new mongoose.Schema({
    userId: {
        type: Number
    },
    username: {
        type: String
    },
    name: {
        type: String
    },
    ref_by: {
        type: Number
    },
    ref_count: {
        type: Number
    },
    my_wallet: {
        type: String
    },
    reward_per: {
        type: String
    },
    reward: {
        type: String
    },
    today_wallet: {
        type: String
    },
    created_at: {
        type: Date,
        default: Date.now
    }
},{versionKey: false})

module.exports = mongoose.model('bot_user_list',s)