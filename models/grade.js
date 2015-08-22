'use strict';
module.exports = function(sequelize, DataTypes) {
  var Grade = sequelize.define('Grade', {
    gradeName: DataTypes.STRING,
  }, {
    classMethods: {
      associate: function(models) {
        Grade.hasMany(models.Student, {as: 'Student'});
      }
    }
  });
  return Grade;
};
