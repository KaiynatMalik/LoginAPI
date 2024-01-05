const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
    courseID: {
        type: String,
        required: true
    },

    CourseName: {
        type: String,
        required: true
    },

    certificateID:
    {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Certificate"
    },

});

module.exports = mongoose.model('Courses', courseSchema);
