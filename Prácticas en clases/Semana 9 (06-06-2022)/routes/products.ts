import { Router } from 'express'
import { check } from 'express-validator'

import { Producto } from '../controllers'

const {crearProducto, obtenerProducto, obtenerProductos} = Producto

import funciones from '../middleware'

const { validarCampos } = funciones

const router = Router()


router.get('/', obtenerProductos)
router.get('/:id'
, check('id', 'Debe ser un ID de mongo valido').isMongoId()
, validarCampos
, obtenerProducto)
router.post('/'
, check('nombre','El nombre debe ser completado').not().isEmpty()
, validarCampos
, crearProducto)


export { router }