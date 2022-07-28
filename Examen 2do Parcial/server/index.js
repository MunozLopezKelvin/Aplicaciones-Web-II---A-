const express = require('express');
const cors = require('cors');

// INICIALIZACION EXPRESS
const app = express();

// CONFIGURACION
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// RUTAS (CAMBIAR POR NOMBRE DE ARCHIVO DE RUTAS)
const exam_routes = require('./routes/examen');

// RUTA PADRE
app.use('/api/exam', exam_routes);

// PUERTO
const port = process.env.PORT || 3000;

// CONF DE PUERTO
app.listen(port, function() {
    console.clear();

    console.log("Servidor corriendo en el puerto: " + port);
});