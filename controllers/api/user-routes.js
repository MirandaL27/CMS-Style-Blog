const router = require('express').Router();
const { User, Post, Vote, Comment} = require("../../models");


router.get('/', (req, res) => {

});


router.get('/:id', (req, res) => {

});


router.post('/',async (req, res) => {
    try{
        let data = await User.create({
            user_name: req.body.username,
            email: req.body.email,
            password: req.body.password
          });

        req.session.save(() => {
        req.session.user_id = data.id;
        req.session.user_name = data.user_name;
        req.session.loggedIn = true;
        });
        
        res.json(data);
    }
    catch (error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/login', (req, res) => {
  
});

router.post('/logout', (req, res) => {

});


router.put('/:id', (req, res) => {

  });

router.delete('/:id', (req, res) => {

  });

module.exports = router;