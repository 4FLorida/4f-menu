const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  name: {
    type:String,
    required:true,
  },
  price : {
    type: Number,
    required:true,
  },
  info : {
    type:String,
    default:'Ürün bilgisi default',
    required:true,
  },
  image : {
    type:String,
    required:false, // default image ekleriz
  },
})

module.exports = mongoose.model('Product',ProductSchema);