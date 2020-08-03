const mongoose = require('mongoose')


var studentSchema = new mongoose.Schema({
    name:{
        type : String,
        required : true
    },
    present:{
        type : Boolean,
        required : true,
        default : false
    }
  });

  module.exports = mongoose.model('Student', studentSchema)