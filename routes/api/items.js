const { request } = require('express');
const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({ date: -1})
        .then(items => res.json(items));
});

// @route POST api/items
// @desc Create a Post
// @access Public
router.post('/', (req, res) => {
    const newItem = new Item({
        name: request.body.name
    });

    newItem.save().then(item => res.json(item));
});

module.exports = router;