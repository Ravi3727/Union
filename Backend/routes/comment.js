const express = require('express')
const router = express.Router()
const Comment = require('../models/Comment')

router.post('/addcomment', [], async (req, res) => {
    try {
        const { userId, comment } = req.body;
        const newComment = new Comment({ userId, comment });
        await newComment.save();
        res.status(201).json({ message: 'Comment added successfully', comment: newComment });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

router.get('/getallcomments', [], async (req, res) => {
    try {
        const comments = await Comment.find();
        res.json(comments);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;