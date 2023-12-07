const { default: mongoose } = require("mongoose");

const formEditSchema = new mongoose.Schema({
    "categorize": [
        {
            "categorize_points": Number,
            "categorize_description": String,
            "categorize_media": String,
            "category": [String],
            "itemsAndBelongsTo": [
                {
                    "[item_content]": "[belongsTo_content]"
                }
            ]
        }
    ],
    "cloze": [
        {
            "cloze_points": Number,
            "cloze_preview": String,
            "cloze_question": String,
            "cloze_media": String,
            "cloze_options": [String]
        }
    ],
    "comprehension": [
        {
            "comprehension_points": Number,
            "comprehension_description": String,
            "comprehension_passage": String,
            "comprehension_media": String,
            "comprehension_questions": String,
            "comprehensionOptions": [String]
        }
    ]
}
)

const Form = mongoose.model("formdata", formEditSchema)

module.exports = Form 