const mongoose = require("mongoose");

const itemsAndBelongsToSchema = new mongoose.Schema({
    key: { type: String, required: true },
    value: { type: String, required: true }
});

const categorizeSchema = new mongoose.Schema({
    categorize_points: { type: Number, required: true },
    categorize_description: { type: String, required: true },
    categorize_media: { type: String, default: "none" },
    category: [{ type: String, required: true }],
    itemsAndBelongsTo: [itemsAndBelongsToSchema]
});

const clozeSchema = new mongoose.Schema({
    cloze_points: { type: Number, required: true },
    cloze_preview: { type: String, default: "none" },
    cloze_question: { type: String, required: true },
    cloze_media: { type: String, default: "none" },
    cloze_options: [{ type: String, required: true }]
});

const comprehensionSchema = new mongoose.Schema({
    comprehension_points: { type: Number, default: null },
    comprehension_description: { type: String, required: true },
    comprehension_passage: { type: String, required: true },
    comprehension_media: { type: String, default: "none" },
    comprehension_questions: { type: String, required: true },
    comprehension_options: [{ type: String, required: true }]
});

const formEditSchema = new mongoose.Schema({
    categorize: [categorizeSchema],
    cloze: [clozeSchema],
    comprehension: [comprehensionSchema]
});

const Form = mongoose.model("FormData", formEditSchema);

module.exports = Form;
