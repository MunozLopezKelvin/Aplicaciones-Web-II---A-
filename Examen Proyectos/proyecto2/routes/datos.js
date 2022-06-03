const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerEstablecimientos, 
        crearEstablecimiento   
} = require('../controllers').Establecimiento;

const router = Router();

router.get('/' , obtenerEstablecimientos)
router.post('/', [check('ESTABLECIMIENTO_NOMBRE', 'El nombre es obligatorio').not().isEmpty()], crearEstablecimiento)


module.exports = router;