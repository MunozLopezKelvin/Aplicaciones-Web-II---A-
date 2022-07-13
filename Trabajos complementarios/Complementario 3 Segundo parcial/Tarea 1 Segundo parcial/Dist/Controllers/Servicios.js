"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrarServicio = exports.actualizarServicio = exports.crearServicio = exports.obtenerServicio = exports.obtenerServicios = void 0;
const Models_1 = require("../Models");
const obtenerServicios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { limite = 10, desde = 0 } = req.query;
    const query = { estado: true };
    const [total, datos] = yield Promise.all([
        Models_1.Servicio.countDocuments(query),
        Models_1.Servicio.find(query)
    ]);
    res.json([
        total,
        datos
    ]);
});
exports.obtenerServicios = obtenerServicios;
const obtenerServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const SERVICIO_ID = req.params;
    const servicio = (yield Models_1.Servicio.findOne(SERVICIO_ID));
    if (!servicio) {
        return res.status(400).json({ status: 'No es una ID valida >:c' });
    }
    res.json({ servicio, msg: SERVICIO_ID });
});
exports.obtenerServicio = obtenerServicio;
const crearServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const _a = req.body, { Estado } = _a, body = __rest(_a, ["Estado"]);
    const servicio = new Models_1.Servicio(body);
    const ServicioNuevo = yield servicio.save();
    res.status(201).json(ServicioNuevo);
});
exports.crearServicio = crearServicio;
const actualizarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const _b = req.body, { Estado } = _b, body = __rest(_b, ["Estado"]);
    const ServicioModificado = yield Models_1.Servicio.findByIdAndUpdate(id, body, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(ServicioModificado);
});
exports.actualizarServicio = actualizarServicio;
const borrarServicio = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params;
    const ServicioBorrado = yield Models_1.Servicio.findByIdAndUpdate(id, { Estado: false }, { new: true }).catch((err) => { res.status(400).json({ status: 'No es una ID valida >:c', error: err }); });
    res.json(ServicioBorrado);
});
exports.borrarServicio = borrarServicio;
