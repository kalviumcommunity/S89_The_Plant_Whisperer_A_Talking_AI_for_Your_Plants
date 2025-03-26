const mongoose = require('mongoose');

const user = mongoose.Schema({
    plant_name:{
        type:String,
        required:true
    },
    care_advice:{
        type:String,
        required:true
    },
     watering_frequency:{
        type:String,
        required:true
    },
     light_requirement:{
        type:String,
        required:true
    },
     temperature_range:{
        type:String,
        required:true
    },
     humidity_level:{
        type:String,
        required:true
    },
     common_issues:{
        type:String,
        required:true
    },
     reminder_set :{
        type:String,
        required:true
    },
     last_watered:{
        type:Date,
        required:true
    }
});

const vevanth = mongoose.model('Sahithi',user);
module.exports = vevanth