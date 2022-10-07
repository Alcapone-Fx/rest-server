const { response, request } = require('express');

const HTTP_STATUSES = { CREATED: 201, BAD_REQUEST: 400 };

const getUsers = (req = request, res = response) => {
  const { name, gender = 'NA' } = req.query;

  res.json({ ok: true, message: 'First GET API from Controller', name, gender });
};

const createUsers = (req, res = response) => {
  const { name, age } = req.body;
  res
    .status(HTTP_STATUSES.CREATED)
    .json({ ok: true, message: 'First POST API', name, age });
};

const updateUsers = (req = request, res = response) => {
  const { userId } = req.params;

  res.json({ ok: true, message: 'First PUT API', id: userId });
};

const deleteUsers =
  ('/',
  (req, res) => {
    res.json({ ok: true, message: 'First DELETE API' });
  });

module.exports = {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
};
