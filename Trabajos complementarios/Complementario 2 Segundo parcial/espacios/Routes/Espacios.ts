
import {Router} from 'express';
import { check } from 'express-validator';
import { Espacio } from '../Controllers/Index';

const {ObtenerEspacios, ObtenerEspacio, CrearEspacio, ActualizarEspacio, BorrarEspacio} = Espacio

const router = Router()

router.get('/' , ObtenerEspacios)
router.get('/:ESPACIO_ID', ObtenerEspacio)
router.post('/', [check('ESPACIO_ID', 'La ID es obligatorio').not().isEmpty()], CrearEspacio)
router.put('/:ESPACIO_ID', ActualizarEspacio)
router.delete('/:ESPACIO_ID', BorrarEspacio)

export{router}