const router = require('express').Router();
const sequelize = require('../db/connection');
const { Post, User, Comment } = require('../models');

router.get('/', (req, res) => {
    Post.findAll({
      attributes: [
        'id',
        'post_content',
        'title',
        'created_at',
      ],
      include: [
        {
          model: Comment,
          attributes: ['id', 'comment_contents', 'post_id', 'user_id', 'created_at'],
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
    })
      .then(data => {
        // pass a single post object into the homepage template
        const blogPosts = data.map(blogPost => blogPost.get({ plain: true }));
        res.render('homepage', {
          blogPosts,
          loggedIn: req.session.loggedIn
        });
      })
      .catch(error => {
        console.log(error);
        res.status(500).json(error);
      });
});

router.get('/post/:id', (req, res) => {
    Post.findOne({
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
            attributes: ['id', 'comment_contents', 'post_id', 'user_id', 'created_at'],
            include: {
              model: User,
              attributes: ['username']
            }
          },
          {
            model: User,
            attributes: ['username']
          }
        ]
      })
        .then(data => {
          if (!data) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
          }
    
          // serialize the data
          const blogPost = data.get({ plain: true });
    
          // pass data to template
          res.render('single-post', {
            blogPost,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(error => {
          console.log(error);
          res.status(500).json(error);
        });
});

router.get('/login', (req, res) => {
    if (req.session.loggedIn) {
      res.redirect('/');
      return;
    }
    
    res.render('login');
  });

module.exports = router;