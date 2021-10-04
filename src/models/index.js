

const mongoose  = require('mongoose');
const MiModelo = new mongoose.Schema({
  nombre:{
    type:String,
    require:true,
  },
  edad:{  
    type:Number,
  },
  especialidad:{
    type:String,
  },
  genero:{
    type:String,
  }
})
module.exports = mongoose.model('Medicos',MiModelo);