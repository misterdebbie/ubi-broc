const express = require('express');
const antController = require('../controllers/antController');
const antRouter = express.Router();
//resolves to '/search/journal'
antRouter.get('/ant', antController.getData);


module.exports = antRouter;
