const mongoose=require('mongoose')
const AdminSchema=new mongoose.Schema({
    name: { type: String, required: false },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },

})
module.exports=mongoose.model("Admin" , AdminSchema)