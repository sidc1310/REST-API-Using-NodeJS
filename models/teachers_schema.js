const mongoose = require('mongoose')


const teacherSchema = new mongoose.Schema({

    name :{
        type : String,
        required : true
    },
    subject:{
        type : String,
        required : true,
        default : false
    }


})

module.exports = mongoose.model('Teacher',teacherSchema)