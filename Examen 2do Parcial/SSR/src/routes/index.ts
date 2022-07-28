import { Router } from "express";
import {indexController} from '../controllers/exonerado'

const router : Router = Router();

// PAGINA PRINCIPAL (CAMBIAR NOMBRE DE RUTA)
router.get('/exonerado/inicio', indexController.index)

export default router