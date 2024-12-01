const mongoose = require("mongoose")

const WordSchema = mongoose.Schema(
    {
        Name: {
            type: String,
            required: true
        },
        Book: {
            type: String,
            required: [true, "in what book the def is written"]
        },
        WhereInTheBook: {
            type: String,
            required: [true, "which page or chapter and passook"]
        },
    },

    {
        timestamps: true
    }
)
//this next line makes everything i do create on this model to 
//get into the word scheme which will be called "wards"
const Word = mongoose.model("Word", WordSchema) 
module.exports = Word