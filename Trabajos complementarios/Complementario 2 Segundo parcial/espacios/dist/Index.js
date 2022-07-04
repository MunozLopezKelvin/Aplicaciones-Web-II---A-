"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const Server_1 = require("./src/Server");
const server = new Server_1.Server();
server.listen();