const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactForumSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    domain: { type: Schema.Types.ObjectId, ref: 'Domain', required: true }, // Reference to Domain model
}, { timestamps: true });

const ContactForum = mongoose.model('ContactForum', contactForumSchema);

module.exports = ContactForum;
