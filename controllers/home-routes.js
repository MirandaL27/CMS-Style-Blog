const router = require('express').Router();
const sequelize = require('../db/connection');
const { Post, User, Comment } = require('../models');

router.get('/', async (req, res) => {
  try{
    let data = await Post.findAll({
        attributes: [
          'id',
          'post_content',
          'title',
          'created_at',
        ],
        include: [
          {
            model: Comment,
            attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['user_name']
            }
          },
          {
            model: User,
            attributes: ['user_name']
          }
        ]
      });
      const blogPosts = data.map(post => post.get({ plain: true }));
      res.render('homepage', {blogPosts});
  }
  catch(error){
    console.log(err);
    res.status(500).json(err);
  }
  });

  router.get('/post/:id', async (req, res) => {
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
            include: [
              {
                model: Comment,
                attributes: ['id', 'comment_content', 'post_id', 'user_id', 'created_at'],
                include: {
                  model: User,
                  attributes: ['user_name']
                }
              },
              {
                model: User,
                attributes: ['user_name']
              }
            ]
          });
          if(!data){
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
          const blogPost = data.get({ plain: true });
          res.render('single-post', {blogPost});
      }
      catch(error){
        console.log(error);
        res.status(500).json(error);
      }
  });

module.exports = router;