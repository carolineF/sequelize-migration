'use strict';
module.exports = function(sequelize, DataTypes) {
  var Student = sequelize.define('Student', {
    name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        Student.belongsTo(models.Grade, {as: 'Grade'});
      }
    }
  });
  return Student;
};
