const express = require('express')
const Word = require('../models/word.model.js')

const router = express.Router();

const {ReadWord,UpdateWord,CreateWord,DeleteWord} = require('../controllers/wordFuncs.js')

//------------------------------------------------------
//READ SPECIFIC WORD: (ID, CAN CONVERT TO EVERY ATTRIBUTE)
router.get('/:id',ReadWord)
//------------------------------------------------------
//UPDATE SPECIFIC WORD: (ID, CAN CONVERT TO EVERY ATTRIBUTE)
router.put('/:id',UpdateWord)
//-------------------------------------------------------
//DELETE SPECIFIC WORD: (ID, CAN CONVERT TO EVERY ATTRIBUTE)
router.delete('/:id',DeleteWord)
//--------------------------------------------------------------
//CREATE NEW WORD: 
router.post('/',CreateWord)
//------------------------------------------

module.exports = router;


