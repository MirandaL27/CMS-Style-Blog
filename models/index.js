const User = require("./User");//need the user model
const Post = require("./Post")//need the post model
const Comment = require("./Comment")//need the comment model

//make associations here!
//user -> post = one to many
User.hasMany(Post, {
    foreignKey: 'user_id'
});

Post.belongsTo(User, {
    foreignKey: 'user_id'
});
//user -> comment = one to many
User.hasMany(Comment, {
    foreignKey: 'user_id'
});

Comment.belongsTo(User, {
    foreignKey: 'user_id'
});
//post -> comment = one to many
Post.hasMany(Comment, {
    foreignKey: 'post_id'
});

Comment.belongsTo(Post, {
    foreignKey: 'post_id'
});


module.exports = { User, Post, Comment};