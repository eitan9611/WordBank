const express = require('express')
const Word = require('../models/word.model.js')

const router = express.Router();

const {ReadAllWords}= require('../controllers/wordsFuncs.js')

//--------------------------------------------------------
//READ ALL WORDS:   
router.get('/',ReadAllWords)
//-------------------------------------------

module.exports = router;
