const express = require('express');
const {CutVideoYoutube, TakeAudio} = require('../controllers/CutVideoYoutube.controller.js');

const routers = express.Router();

routers.post('/', CutVideoYoutube);
routers.post('/TakeAudio', TakeAudio);

module.exports = routers;