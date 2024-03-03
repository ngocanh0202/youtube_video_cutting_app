const express = require('express');
const {CutVideoYoutubeController, TakeAudioController} = require('../controllers/CutVideoYoutube.controller.js');

const routers = express.Router();

routers.post('/', CutVideoYoutubeController);
routers.post('/TakeAudio', TakeAudioController);

module.exports = routers;