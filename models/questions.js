'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Questions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Questions.belongsTo(models.Election, {
        foreignKey: "electionId",
      });
      Questions.hasMany(models.Option,{
        foreignKey:"questionId"
      })
    }
    static addNewQuestion({question,description,electionId}){
      return this.create({
        electionQuestion:question,
        questionDescription:description,
        electionId
      })
    }
    static async countOFQuestions(electionId){
      return await this.count({
        where:{
          electionId
        }
      })
    }
    static  getQuestionWithId(id) {
      return this.findOne({
        where: {
          id,
        },
      });
    }
  }
  Questions.init({
    electionQuestion:{
      type:DataTypes.STRING,
      allowNull:false
    },
    questionDescription: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Questions',
  });
  return Questions;
};