const mongoose = require('mongoose');


const dbSchema = new mongoose.Schema({
        hid : {
            type : String,
            required : true
        },
        name : {
            type : String,
            required : true
        },
        location : {
            type : String,
            required : true
            
        },
        address : {
            type : String,
            required : true

        },
        contactNo : {
            type : String,
            required : true
        }

})

module.exports = mongoose.model('db', dbSchema);
