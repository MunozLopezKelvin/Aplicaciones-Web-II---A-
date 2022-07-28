const express = require('express');
const PrestamoController = require('../controllers/examen');

const app = express.Router();

app.post('/agregar', PrestamoController.createPrestamo);
app.get('/', PrestamoController.readPrestamo);
app.get('/ver/:iduser', PrestamoController.readPrestamoIdSoli);
app.patch('/editar/:iduser', PrestamoController.updatePrestamo);
app.delete('/eliminar/:iduser', PrestamoController.deletePrestamo);

module.exports = app;