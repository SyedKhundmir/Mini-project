const mongoose = require('mongoose');


const dbSchema = new mongoose.Schema({
        hid : {
            type : String,
            required : true
        },
        ventilatorid : {
            type : String,
            required : true
        },
        status : {
            type : String,
            required : true
            
        },
        name : {
            type : String,
          

        }

})

module.exports = mongoose.model('db', dbSchema);
