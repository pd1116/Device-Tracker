const express = require('express');
const router = express.Router();
const controller = require('../controllers/userController');

router.get('/', controller.getUsers);
router.post('/', controller.addUser);
router.delete('/:id', controller.deleteUser);


module.exports = router;
