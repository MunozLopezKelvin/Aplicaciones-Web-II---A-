const { Router } = require('express');
const { check } = require('express-validator');
const { obtenerProducto, 
        obtenerProductos,
        crearProducto,
        actualizarProducto,
        borrarProducto        
} = require('../controller').Producto;

const {ValidarCampos} = require('../middlewares');

const router = Router();

router.get('/' , obtenerProductos)
router.get('/:id', [check('id', 'El id no es válido').isMongoId(), ValidarCampos ], obtenerProducto)
router.post('/', [check('nombre', 'El nombre es obligarotio').not().isEmpty(), ValidarCampos], crearProducto)
router.put('/:id', [check('id', 'El id no es válido').isMongoId(), ValidarCampos], actualizarProducto)
router.delete('/:id', [check('id', 'El id no es válido').isMongoId(), ValidarCampos], borrarProducto)

module.exports = router;