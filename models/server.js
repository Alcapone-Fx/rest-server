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
    this.app.get('/api', (req, res) => {
      res.json({ ok: true, message: "First GET API" });
    });
    
    this.app.post('/api', (req, res) => {
      res.json({ ok: true, message: "First POST API" });
    });
    
    this.app.put('/api', (req, res) => {
      res.json({ ok: true, message: "First PUT API" });
    });
    
    this.app.delete('/api', (req, res) => {
      res.json({ ok: true, message: "First DELETE API" });
    });
  }

  listen() {
    this.app.listen(this.#PORT, () => {
      console.log(`Server running on port: ${this.#PORT}`);
    });
  }
};

module.exports = Server;
