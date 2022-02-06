const router = require('express').Router(); // need the router to make the routes work
const { Post} = require('../../models');//need post model to make database queries
const sequelize = require('../../db/connection');//need the database connection

// get all posts
router.get('/', (req, res) => {
  });

  //get one post by id
  router.get('/:id', (req, res) => {
  });

  //create a new post
  router.post('/',(req, res) => {

  });

  //update a post
  router.put('/:id',(req, res) => {
  });

  //delete a post
  router.delete('/:id',(req, res) => {
  });

  module.exports = router;