"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Index_1 = require("../Controllers/Index");
const { obtenerServicios, obtenerServicio, crearServicio, actualizarServicio, borrarServicio } = Index_1.Servicio;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerServicios);
router.get('/:SERVICIO_ID', obtenerServicio);
router.post('/', [(0, express_validator_1.check)('SERVICIO_NOMBRE', 'El nombre es obligatorio').not().isEmpty()], crearServicio);
router.put('/:SERVICIO_ID', actualizarServicio);
router.delete('/:SERVICIO_ID', borrarServicio);
