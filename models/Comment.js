const { Schema } = require('mongoose');
const dateFormat = require('../src/utils/dateFormat');

const commentSchema = new Schema({
    commentBody: {
        type: 'string',
        required: true,
        maxLength: 240
    },
    username: {
        type: 'string',
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp)
    }
},
{
    toJson: {
        getters: true
    }
})

module.exports = commentSchema