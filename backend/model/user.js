const mongoose = require("mongoose")
const UserSchema = new mongoose.Schema({
  email: { type: String,  unique: true },
  password: { type: String,  },
  name: { type: String,  },
  number: { type: Number },
  role: { type: String, default: 'user' }, // Adding role field with default value
//   token: { type: String , default:''},
//   post: { type: String }, // Store image URL
veried:{type:Boolean, default:false}
}); 

module.exports  = mongoose.model("User_blog", UserSchema);
 
