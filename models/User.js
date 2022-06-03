const { Schema, model } = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new Schema({
    username: {
        type: 'string',
        required: true,
        trim: true,
        unique: true
    },
    email: { 
        type: 'string', 
        required: true,
        unique: true,
        match: [/.+@.+\..+/, 'You must enter a valid email address!']
    },
    password: {
        type: 'string',
        required: true,
        minLength: 6
    },
    friends: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    tickers: [{
        type: Schema.Types.ObjectId,
        ref: 'Ticker'
    }]
},
{
    toJson: {
        virtuals: true,
    }
}
)

// pre-save middleware to create a password
userSchema.pre('save', async function(next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);    }
        next();
});

userSchema.methods.isCorrectPassword = async function(password) {
    return bcrypt.compare(password, this.password)
};

userSchema.virtual('friendCount').get(function() {
    return this.friends.length})

const User = model('User', userSchema)

module.exports = User