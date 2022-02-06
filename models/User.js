const { Model, DataTypes } = require('sequelize'); // need sequelize to interacvt with database
const sequelize = require('../db/connection');// need database connection

class User extends Model {

}//define the user class and inherit from the sequelize Model class

//define the database columns for the user
User.init({
    id: {
        type: DataTypes.INTEGER, //integer type
        primaryKey: true, // primary key
        allowNull: false, //does not allow null values
        autoIncrement: true //auto-increments
    },
    user_name: {
        type: DataTypes.STRING, //string type
        allowNull: false, //does not allow null values
        validate: {
            len: [1] //has to have a length of at least 1
        }
    },
    email: {
        type: DataTypes.STRING, //string type
        allowNull: false, //does not allow null values
        validate: {
            isEmail: true //checks to see if value is an email
        }
    },
    password: {
        type: DataTypes.STRING, //string type
        allowNull: false, //doesn't allow null values
        validate: {
            len: [4] //has to have a length of at least 4 characters
        }

    }
},
    {
        //other model options
        sequelize, // pass in the connection instance
        timestamps: false, // disables the created_at/updated_at fields
        freezeTableName: true, // makes the table name equal to the model name without pluralization
        underscored: true, // uses snake case for all automatically created fields
        modelName: 'user' //choose a name for the model, this is the table name
    }
);

module.exports = User;