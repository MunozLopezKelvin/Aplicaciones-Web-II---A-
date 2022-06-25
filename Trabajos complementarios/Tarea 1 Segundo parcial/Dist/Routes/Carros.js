"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const express_validator_1 = require("express-validator");
const Index_1 = require("../Controllers/Index");
const { obtenerCarro, obtenerCarros, crearCarro, actualizarCarro, borrarCarro } = Index_1.Carro;
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', obtenerCarros);
router.post('/:CARRO_PLACA', obtenerCarro);
router.post('/', [(0, express_validator_1.check)('CARRO_PLACA', 'La placa es obligatoria').not().isEmpty()], crearCarro);
router.put('/:CARRO_PLACA', actualizarCarro);
router.delete('/:CARRO_PLACA', borrarCarro);
