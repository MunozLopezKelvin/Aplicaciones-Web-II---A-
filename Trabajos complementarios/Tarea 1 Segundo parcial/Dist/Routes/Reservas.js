"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Index_1 = require("../Controllers/Index");
const { CrearReserva, ObtenerReserva, ObtenerReservas, ActualizarReserva, BorrarReserva } = Index_1.Reserva;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', ObtenerReservas);
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
router.get('/:RESERVACION_ID', ObtenerReserva);
router.post('/', [(0, express_validator_1.check)('id', 'ID es obligatorio').not().isEmpty()], CrearReserva);
///////////////////////REVISAR PARA CAMBIAR ESTO///////////////////////////
router.put('/:RESERVACION_ID', ActualizarReserva);
router.delete('/:RESERVACION_ID', BorrarReserva);
