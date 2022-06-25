"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Trabajador = exports.Establecimiento = exports.Servicio = exports.Espacio = exports.Carro = exports.Reserva = exports.Cliente = void 0;
const Carro = __importStar(require("../Controllers/Carros"));
exports.Carro = Carro;
const Cliente = __importStar(require("../Controllers/Clientes"));
exports.Cliente = Cliente;
const Espacio = __importStar(require("../Controllers/Espacios"));
exports.Espacio = Espacio;
const Reserva = __importStar(require("../Controllers/Reservas"));
exports.Reserva = Reserva;
const Servicio = __importStar(require("../Controllers/Servicios"));
exports.Servicio = Servicio;
const Trabajador = __importStar(require("../Controllers/Trabajadores"));
exports.Trabajador = Trabajador;
const Establecimiento = __importStar(require("../Controllers/Establecimientos"));
exports.Establecimiento = Establecimiento;
