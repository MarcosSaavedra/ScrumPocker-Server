const mongoose = require('mongoose')

mongoose.connect("mongodb://localhost/pocker-scrum" , {
    useUnifiedTopology: true , 
    useNewUrlParser:true
})
.then((db) => console.log("Db es connected"))
.catch((err) => console.error(err));