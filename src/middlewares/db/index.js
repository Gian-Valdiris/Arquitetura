const mongoose = require('mongoose')


const connectDB = async()=>{

  try{
    await mongoose.connect('mongodb+srv://gianvaldiris:hogar391@gian.xyoa2.mongodb.net/medicos');
    console.log('Se ha conectado a la base de datos')
  }
  catch(e){
    console.log(e.message)
  }

}
module.exports=connectDB;