const userCtrl = {}

const userModel  = require ('../models/User')
userCtrl.getUsers  = async (req,res) => {
    const users = await userModel.find( {'room' : req.params.room}) ;
    res.json (users)
 }
 userCtrl.createUser  =async (req,res) => {
    const newUser = new userModel(req.body)
    const test = await newUser.save()
    res.send(test)
 }
 userCtrl.getUser  =async (req,res) => {
   const userFound = await userModel.findById(req.params.id)
   res.send(userFound); 
 }
 userCtrl.updateUser  =async (req,res) => {
   const userUpdated  = await userModel.findByIdAndUpdate(req.params.id , req.body)
   res.send(userUpdated)
 }
 userCtrl.deleteUser  =async (req,res) => {
   const userDeleted = await userModel.findByIdAndDelete(req.params.id)

 }
 
module.exports =  userCtrl;