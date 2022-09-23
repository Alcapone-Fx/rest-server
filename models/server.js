const express = require('express');
require('dotenv').config();

class Server {
  #PORT;
  constructor() {
    this.app = express();
    this.#PORT = process.env.PORT;
    // Middlewares: functions tha are triggered when starting the server
    this.middlewares();

    this.routes();
  }

  middlewares() {
    this.app.use(express.static('public'));
  }

  routes() {
    this.app.get('/', (req, res) => {
      res.json('Hola Mundo!');
    });
    
    this.app.get('/hello', (req, res) => {
      res.send('Hello World!');
    });
  }

  listen() {
    this.app.listen(this.#PORT, () => {
      console.log(`Server running on port: ${this.#PORT}`);
    });
  }
};

module.exports = Server;
