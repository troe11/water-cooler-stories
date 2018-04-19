module.exports = function (sequelize, DataTypes) {

    var Userinformation = sequelize.define("Userinformation", {
        user_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        phone_1: {
            type: DataTypes.INTEGER,
        },
        email_1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }

    });

    
    

        
        return Userinformation;
    };


