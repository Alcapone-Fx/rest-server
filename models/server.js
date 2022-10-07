const express = require('express');
const cors = require('cors');
require('dotenv').config();

const userRoutes = require('../routes/users.routes');

class Server {
  #PORT;
  #ENDPOINT_PREFIX;
  #paths;

  constructor() {
    this.app = express();
    this.#PORT = process.env.PORT;
    this.#ENDPOINT_PREFIX = '/api';
    this.#paths = {
      usuarios: `${this.#ENDPOINT_PREFIX}/users`,
    };

    // Middlewares: functions tha are triggered when starting the server
    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(cors());

    // middleware needed to read and parse payload requests
    this.app.use(express.json());

    this.app.use(express.static('public'));
  }

  routes() {
    this.app.use(this.#paths.usuarios, userRoutes);
  }

  listen() {
    this.app.listen(this.#PORT, () => {
      console.log(`Server running on port: ${this.#PORT}`);
    });
  }
}

module.exports = Server;
