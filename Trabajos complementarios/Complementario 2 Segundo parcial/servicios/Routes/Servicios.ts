import { Router } from "express";
import {check} from "express-validator";
import {Servicio} from "../Controllers/Index";

const {obtenerServicios, obtenerServicio, crearServicio, actualizarServicio, borrarServicio}=Servicio

const router=Router()
 
router.get('/' , obtenerServicios)
router.get('/:SERVICIO_ID', obtenerServicio)
router.post('/', [check('SERVICIO_NOMBRE', 'El nombre es obligatorio').not().isEmpty()], crearServicio)
router.put('/:SERVICIO_ID', actualizarServicio)
router.delete('/:SERVICIO_ID', borrarServicio)

export{router}