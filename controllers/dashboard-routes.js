const router = require('express').Router();
const sequelize = require('../db/connection');
const { Post, User, Comment } = require('../models');

router.get('/' ,(req, res) => {
});

router.get("/edit/:id", (req, res) => {
})

module.exports = router;