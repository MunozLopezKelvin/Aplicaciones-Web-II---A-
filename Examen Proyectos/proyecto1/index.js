const express = require('express');
const app = express()
const PORT = 3000;


app.use(express.json())


app.listen(PORT, function(){
    console.log('Servidor encendido');
});
