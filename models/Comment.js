const { Model, DataTypes } = require('sequelize'); // need sequelize model to inherit from and datatypes for columns
const sequelize = require('../db/connection');//need database connection

class Comment extends Model {}//comment inherits from model

Comment.init(
  {
//comment columns go here!
    id : {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    comment_content: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            len: [1]
          }
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'user',
          key: 'id'
        }
      },
      post_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: 'post',
          key: 'id'
        }
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'comment'
  }
);

module.exports = Comment;