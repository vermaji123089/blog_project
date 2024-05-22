const mongoose = require("mongoose")
const postScema = new mongoose.Schema({
  title: { type: String, required: true, unique: true },
  discription: { type: String, required: true },
  number: { type: Number },
//   role: { type: String, default: 'user' }, // Adding role field with default value
//   token: { type: String , default:''},
  post: { type: String }, // Store image URL

});

module.exports  = mongoose.model("Post", postScema);
