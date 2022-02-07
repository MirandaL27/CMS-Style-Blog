const router = require('express').Router();
const { Comment } = require('../../models');

router.get('/', async (req, res) => {
    try{
        let data = await Comment.findAll();
        res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(500).json(error);
    }
});

router.post('/',async (req, res) => {
    try{
        let data = await Comment.create({
            comment_content: req.body.comment_content,
            post_id: req.body.post_id,
            user_id: req.body.user_id
          });
          res.json(data);
    }
    catch(error){
        console.log(error);
        res.status(400).json(error);
    }
});

router.delete('/:id',async(req, res) => {
    try{
        let data = await Comment.destroy({
            where: {
              id: req.params.id
            }
          });
          if (!data) {
            res.status(404).json({ message: 'No comment found with this id' });
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