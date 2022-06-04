const { Schema, model } = require('mongoose');
const dateFormat = require('..src/utils/date-format');
const commentSchema = require('./Comment')

const tickerSchema = new Schema({
    title: {
        type: 'string',
        required: 'You must include a title for this Ticker!',
        minLength: 1,
        maxLength: 150
    },
    createdAt: {
        type: Date,
        default: Date.now,
        get : timestamp => dateFormat(timestamp)
    },
    endDate: {
        type: Date,
        required: 'You must include a end date for this Ticker'
    },
    username: {
        type: 'string',
        required:true
    },
    public: {
        type: 'boolean',
        required: true
    },
    comments: [commentSchema]
},
{
    toJson: {
        getters: true
    }
})

// may not need this, but wanted to include it just in case
tickerSchema.virtual('commentCount').get(function () {
    return this.comments.length
})

const Ticker = model('Thought', tickerSchema);

module.exports = Ticker