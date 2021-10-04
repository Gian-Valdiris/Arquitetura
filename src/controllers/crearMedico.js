
const ModelMedico = require('../models/index');
const crearMedico = async(req,res)=>{
  try{
    console.log(req.body);
    const medico = await ModelMedico.create(req.body);

    return res.json({
      msg:'Tood ok ',
      medico
    })
  }
  catch(e){
    console.log(e)
  }
}
module.exports = {
  crearMedico
};
