const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        userID: {
            type: String,
            required: true,
        },

        UserName: {
            type: String,
            required: true,
        },

        phoneNumber: {
            type: Number,
            required: true,
        },

        createdAt: {
            type: Date,
            default: Date.now(),
        }

    }
)

module.exports = mongoose.model('User', userSchema);
