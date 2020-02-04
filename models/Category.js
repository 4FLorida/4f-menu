const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CategorySchema = new Schema({
  name: {
    type:String,
    required:true,
  },
  products : {
    type:Array,
    required:false,
  },
  image : {
    type:String,
    required:false, // default image ekleriz
  }
})

module.exports = mongoose.model('Category',CategorySchema);