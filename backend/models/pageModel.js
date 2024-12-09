const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    title: String,
    cover: { type: String, unique: false },
    description: { type: String },
    images: { type: String, unique: false },
    link: { type: String, unique: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('pagesData', mySchema);