const router = require('express').Router();
const sequelize = require('../db/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
});

router.get('/post/:id', (req, res) => {
});

module.exports = router;