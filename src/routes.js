const express = require('express');
const UserController = require('./controllers/UserController');

const router = express.Router();

router.post('/', UserController.store);
router.get('/', UserController.index);
router.put('/:id', UserController.edit);
router.delete('/:id', UserController.delete);

module.exports = router;