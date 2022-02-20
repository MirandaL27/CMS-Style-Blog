const router = require('express').Router(); // need the router to make the routes work
const { Post} = require('../../models');//need post model to make database queries
const sequelize = require('../../db/connection');//need the database connection
const withAuth = require('../../utils/auth');

// get all posts
router.get('/', async (req, res) => {
    try{
        let data = await Post.findAll({
            attributes: [
              'id',
              'post_content',
              'title',
              'created_at',
            ],
            order: [['created_at', 'DESC']], 
          })

          res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
  });

  //get one post by id
  router.get('/:id', async (req, res) => {
      try{
       let data = await Post.findOne({
            where: {
              id: req.params.id
            },
            attributes: [
              'id',
              'post_content',
              'title',
              'created_at',
            ],
          });

          if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(data);

      }
      catch(error){
        console.log(error);
        res.status(500).json(error);
      }
    
  });

  //create a new post
  router.post('/',withAuth,async (req, res) => {
    try{
        const data = await Post.create({
            title: req.body.title,
            post_content: req.body.post_content,
            user_id: req.body.user_id
          });
          res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
  });

  //update a post
  router.put('/:id',withAuth,async (req, res) => {
    try{
        const data = await Post.update(
            {
              title: req.body.title,
              post_content: req.body.post_content
            },
            {
              where: {
                id: req.params.id
              }
            });
          if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
  });

  //delete a post
  router.delete('/:id',withAuth,async (req, res) => {
      try{
        const data = await Post.destroy({
            where: {
              id: req.params.id
            }
          });
          if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          res.json(data);
      }
      catch(error){
        console.log(error);
        res.status(500).json(error);
      }
  });

  module.exports = router;