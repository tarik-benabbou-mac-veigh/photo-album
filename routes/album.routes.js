const express = require('express');
const router = express.Router();
const albumController = require('../controllers/album.controller');

// GET :
router.get('/albums/create', albumController.createAlbumForm);

// POST :
router.post('/albums/create', albumController.createAlbum);

module.exports = router;