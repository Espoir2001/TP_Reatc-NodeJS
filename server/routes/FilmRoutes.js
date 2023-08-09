const express = require('express');
const router = express.Router();
const filmController = require('../controllers/FilmController');

router.get('/all', filmController.getAllFilm);
router.post('/add', filmController.addFilm);
module.exports = router;