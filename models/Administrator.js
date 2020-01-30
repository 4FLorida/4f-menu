const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AdministratorSchema = new Schema({
  email: {
    type:String,
    required:true,
    unique:true,
  },
  password: {
    type:String,
    required:true,
    minlength:8,
  },
  companyName : {
    type:String,
    required:false,
  },
  companyLogo : {
    type:String,
    required:false // default image ekle
  },
  companyAddress: {
    type:String,
    required:true,
  },
  adminName: {
    type:String,
    required:true,
  },
  adminSurname : {
    type:String,
    required:true,
  },
  adminPhone: {
    type:Number,
    required:true,
    maxlength:11,
  }
})

module.exports = mongoose.model('Product',AdministratorSchema);