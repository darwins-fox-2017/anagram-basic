'use strict';
module.exports = function(sequelize, DataTypes) {
  var Word = sequelize.define('Word', {
    words: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Word;
};