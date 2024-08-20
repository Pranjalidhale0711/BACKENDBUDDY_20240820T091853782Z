const mongoose = require('mongoose');

const schemaSchema = new mongoose.Schema(
{
    array: { 
        type: String,
        required: true,
        unique: false
    },
});

module.exports = mongoose.model('schema', schemaSchema);
