const express = require('express');

const router = express.Router();

const usersController = require('../controllers/usuarios');

/* router.get('/register', (req, res) => {
    res.send('registing user... (?');
}); */

router.get('/register', usersController.registerService);

router.get('validate', )

module.exports = router;