module.exports = function (sequelize, DataTypes) {

    var Tags = sequelize.define("Tags", {
        tags_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        tag_description: {
            type: DataTypes.STRING,
            allowNull: false

        };

        return Tags;
    };
