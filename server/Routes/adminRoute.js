const express=require("express");
const route=express.Router();
const AdminControler=require("../Controllers/adminController")

route.post("/loginsystem",  AdminControler.LoginSystem)
route.post("/resetpassword",  AdminControler.ResetPass)

module.exports=route