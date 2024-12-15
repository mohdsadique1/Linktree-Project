const { model, Schema, } = require('../connection');

const mySchema = new Schema({
    title: String,
    cover: { type: String, unique: false },
    category: {type : String},
    logo: { type: String },
    description: { type: String },
    images: { type: String, unique: false },
    facebookLink: { type: String, unique: false },
    xLink: { type: String, unique: false },
    instagramLink: { type: String, unique: false },
    githubLink: { type: String, unique: false },
    linkedinLink: { type: String, unique: false },
    gmailLink: { type: String, unique: false },
    createdAt: { type: Date, default: Date.now }
});

module.exports = model('pagesData', mySchema);