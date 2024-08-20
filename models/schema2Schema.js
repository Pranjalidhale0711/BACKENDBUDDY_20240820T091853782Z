const mongoose = require('mongoose');

const schema2Schema = new mongoose.Schema(
{
    eee: { 
        type: Number,
        required: true,
        unique: true
    },
});

module.exports = mongoose.model('schema2', schema2Schema);
