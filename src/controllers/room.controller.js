const roomCtrl = {}

const roomModel  = require ('../models/Room')
roomCtrl.getRooms  = async (req,res) => {
    const rooms = await roomModel.find() 
    res.json (rooms)
 }
 roomCtrl.createRoom  =async (req,res) => {
    const newRoom = new roomModel(req.body)
    await newRoom.save()
    res.send('createUser')
 }
 roomCtrl.getRoom  =async (req,res) => {
   const roomFound = await roomModel.findById(req.params.id)
   res.send(roomFound); 
 }
 
 roomCtrl.deleteRoom  =async (req,res) => {
   const roomDeleted = await roomModel.findByIdAndDelete(req.params.id)

 }
 
module.exports =  roomCtrl;