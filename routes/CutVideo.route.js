const express = require('express');
const CutVideoYoutubeController = require('../controllers/CutVideoYoutube.controller.js');

const routers = express.Router();

routers.post('/', CutVideoYoutubeController);

module.exports = routers;