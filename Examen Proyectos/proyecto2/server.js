const express = require('express');

class Server {
    constructor(){
        this.app = express.Router();
        this.router = express.Router();
        this.paths= {
            establecimientos:'/api/establecimientos'
        }
        this.routes();
        this.router.use('/api/prueba', this.app);
        this._express= express().use(this.router)
    }
    routes(){
        this.app.use(this.paths.establecimientos,require('./routes/Establecimientos'))
    }
}

module.exports = Server;