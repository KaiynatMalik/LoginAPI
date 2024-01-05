const mongoose = require("mongoose");

const certScheema = new mongoose.Schema(
    {
        certificateId: mongoose.Schema.Types.ObjectId,

        certificateName: {
            type: String,
            required: true
        },

        isCompleted: {
            type: Boolean,
            default: false
        }
    }
);

module.exports = mongoose.model('Certificate', certScheema);