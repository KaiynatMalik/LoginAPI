const mongoose = require("mongoose");

const userStatusSchema = new mongoose.Schema({
    userID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    courseID:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificate"
    },

    isCompleted:{
        type:Boolean,
        default:false
    }
})

module.exports = mongoose.model('userCourseStatus', userStatusSchema);