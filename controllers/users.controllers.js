const { response } = require('express');

const getUsers = (req, res = response) => {
  res.json({ ok: true, message: "First GET API from Controller" });
};

const createUsers = (req, res = response) => {
  res.status(201).json({ ok: true, message: "First POST API" });
};

const updateUsers = (req, res = response) => {
  res.json({ ok: true, message: "First PUT API" });
};

const deleteUsers = ('/', (req, res) => {
  res.json({ ok: true, message: "First DELETE API" });
});

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers
};