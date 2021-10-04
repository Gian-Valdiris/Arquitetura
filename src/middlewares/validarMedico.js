

const {validationResult} = require('express-validator')

exports.validarMedico = (req,res,next)=>{

  let  errors = validationResult(req) ;
  if (errors.isEmpty()){
    next();
  }
  else{
    return res.json(errors)
  }


  

};
