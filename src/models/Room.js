const {Schema, model }= require('mongoose') ;

const roomSchema = new Schema({
    name: {type: String , required: true} , 
    users: {type: Number , required: true} , 
    active: {type: Boolean , required: true} 
} , {
    timestamps: true ,
    versionKey : false 
});



module.exports = model ("roomModel" ,roomSchema)