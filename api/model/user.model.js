const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type: String,
        required: true,
        unique:true
    },
    password:{
        type:String,
        required: true
    }
}); 

{
    timestamps: true;
}
var Users = mongoose.model('Users',schema);
module.exports = Users;