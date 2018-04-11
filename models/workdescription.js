module.exports = function (sequelize, DataTypes) {
    
    var workDescription = sequelize.define("workDescription", {
        works_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement:true,
            allowNull: false
        },
        work_description: {
            type: DataTypes.STRING,
            allowNull: false

    }, { underscored: true });

