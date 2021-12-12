const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users.controller');

router.delete('/user/:id', usersController.deleteUser)
router.post('/user', usersController.create);
router.get('/user', usersController.getAllUsers);
router.put('/user/:id', usersController.updateUser);

router.get('/health', (req, res) => {
    res.sendStatus(200);
});

module.exports = router;