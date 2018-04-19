module.exports = function (sequelize, DataTypes) {
    
    var WorkDescription = sequelize.define("WorkDescription", {
        works_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },
        work_description: {
            type: DataTypes.STRING,
            allowNull: false

        },
    });

    return WorkDescription;
    };


