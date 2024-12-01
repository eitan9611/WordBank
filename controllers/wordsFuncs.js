const Word = require('../models/word.model.js')


const ReadAllWords = async (req,res) => {
    try {
        const words = await Word.find({}) //nothing here becuase I want all words
        res.status(200).json(words)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}

module.exports = {
    ReadAllWords
}