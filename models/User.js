const bcrypt = require('bcrypt');
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../db/connection');

class User extends Model {
    comparePassword(loginPw) {
      return bcrypt.compareSync(loginPw, this.password);
    }
}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  {
    hooks: {
      async beforeCreate(newData) {
        newData.password = await bcrypt.hash(newData.password, 10);
        return newData;
      },
      async beforeUpdate(existingData) {
        existingData.password = await bcrypt.hash(existingData.password, 10);
        return existingData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

module.exports = User;