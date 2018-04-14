import { userInfo } from "os";

module.exports = function (sequelize, DataTypes) {

    var StorieTable = sequelize.define("StorieTable", {
        story_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        }, 
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        // verify how to put the 3000 character spec in here.
        vent_story:{    
            type:DataTypes.Varchar,
            allowNull:false
        },
        hot_count:{
            type:DataTypes.INTEGER,
            defaultValue:0
        },
        cold_count: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        tag_id1: {
            type: DataTypes.INTEGER,
            allowNull: false

        },
        tag_id2: {
            type: DataTypes.INTEGER,
            defaultValue: 0
        },
        tag_id3: {
            type: DataTypes.INTEGER, 
            defaultValue: 0
        }

     });

    StorieTable.associate = function (models){
         models.StorieTable.belongsTo(models.Userinformation, {
             foreingKey: {
                 allowNull: false
             }
         });
        models.StorieTable.belongsTo(models.Tags,{
            foreingKey: {
                allowNull: false
            }
        });
     }; 

    return StorieTable;
};