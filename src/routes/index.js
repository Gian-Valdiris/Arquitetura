const {Router}  = require('express');
const { crearMedico } = require('../controllers/crearMedico');
const {check} = require('express-validator');
const { validarMedico } = require('../middlewares/validarMedico');
const path = Router();

path
  .route('/')
  .post([
    check('nombre','El nombre es requerido').notEmpty(),
    check('edad','not found').isNumeric(),
    check('especialidad','not found').notEmpty(),
    check('genero').notEmpty(),
    validarMedico
  ],crearMedico)
module.exports= path;