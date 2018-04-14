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
        },
        work_id1: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        work_id2: {
            type: DataTypes.INTEGER,
        },
        work_id3: {
            type: DataTypes.INTEGER,
        },

    });

    Userinformation.associate = function (models) {
        models.StorieTable.belongsTo(models.WorkDescription, {
            foreingKey: {
                allowNull: false
            }
        });
    }; 

        
        return Userinformation;
    };

