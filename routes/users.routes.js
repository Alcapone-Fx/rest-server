const { Router } = require('express'); // Class to create modular, mountable route handlers
const router = Router();

const {
  getUsers,
  createUsers,
  updateUsers,
  deleteUsers,
} = require('../controllers/users.controllers');

router.get('/', getUsers);

router.post('/', createUsers);

router.put('/:userId', updateUsers);

router.delete('/', deleteUsers);

module.exports = router;
