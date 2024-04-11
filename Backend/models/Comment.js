const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    userId: String,
    comment: String,
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;