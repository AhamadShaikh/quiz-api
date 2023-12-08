const { default: mongoose } = require("mongoose");

const formEditSchema = new mongoose.Schema({
    categorize: [
        {
            categorize_points: { type: Number, required: true },
            categorize_description: { type: String, required: true },
            categorize_media: { type: String, required: true },
            category: [{ type: String, required: true }],
            items: [{ type: Object, required: true }],
            belongsTo: [{ type: Object, required: true }]
        }
    ],
    cloze: [
        {
            cloze_points: { type: Number, required: true },
            cloze_preview: { type: String, required: true },
            cloze_question: { type: String, required: true },
            cloze_media: { type: String, required: true },
            cloze_options: [{ type: String, required: true }]
        }
    ],
    comprehension: [
        {
            comprehension_points: { type: Number, required: true },
            comprehension_description: { type: String, required: true },
            comprehension_passage: { type: String, required: true },
            comprehension_media: { type: String, required: true },
            comprehension_questions: { type: String, required: true },
            comprehension_options: [{ type: String, required: true }],
        }
    ]
})

const Form = mongoose.model("formdata", formEditSchema)

module.exports = Form 

