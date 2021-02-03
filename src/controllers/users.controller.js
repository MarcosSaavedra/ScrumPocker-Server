const userCtrl = {}

const userModel  = require ('../models/User')
userCtrl.getUsers  = async (req,res) => {
    const users = await userModel.find() 
    res.json (users)
 }
 userCtrl.createUser  =async (req,res) => {
    const newUser = new userModel(req.body)
    await newUser.save()
    res.send('createUser')
 }
 userCtrl.getUser  = (req,res) => {
    res.send('get user')
 }
 userCtrl.updateUser  = (req,res) => {
    res.send('update user')
 }
 userCtrl.deleteUser  = (req,res) => {
    res.send('delete user')
 }
 
module.exports =  userCtrl;