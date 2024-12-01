const Word = require('../models/word.model.js')



const ReadWord = async (req,res) => { //everything that comes after ":" is acceptable by the server
    try {
        const written_id = req.params.id;
        const specific_word = await Word.findOne({_id: written_id});
        res.status(200).json(specific_word)
    } catch (err){
        res.status(500).json({message: err.message})
    }
}
const UpdateWord = async (req,res) => { //everything that comes after ":" is acceptable by the server
    try {
        const written_id = req.params.id;
        const specific_word = await Word.findByIdAndUpdate(written_id,req.body);
        if(!specific_word)
            return res.status(404).json({message:"we didnt found the requested word to update"})
        const updated_word = await Word.findOne({_id: written_id});
        res.status(200).json(updated_word )
    } catch (err){
        res.status(500).json({message: err.message})
    }
}
const DeleteWord = async (req,res) => { //everything that comes after ":" is acceptable by the server
    try {
        const written_id = req.params.id;
        const specific_word = await Word.findByIdAndDelete(written_id,req.body);
        if(!specific_word)
            return res.status(404).json({message:"we didnt found the requested word to delete"})
        res.status(200).json({ message: "word "+ written_id +" has deleted successfully!" });
    } catch (err){
        res.status(500).json({message: err.message})
    }
} 
const CreateWord = async (req,res) => {
    try {
         //using the model we created in "models":
         const word = await Word.create(req.body) //Word is represnt of the table. we exported that from word.model.js
         res.status(200).json(word)             

    } catch (err){
        res.status(500).json({message: err.message})
    }
} 

module.exports = {
    ReadWord,
    UpdateWord,
    CreateWord,
    DeleteWord
}