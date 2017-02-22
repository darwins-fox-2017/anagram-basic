'use strict';
const fs = require('fs')
const models = require('../models')

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('Person', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
    let arrWords = fs.readFileSync('./db/fixtures/words', 'utf-8')
    arrWords = arrWords.split('\n')
    return new Promise(function(res, rej) {
      let count = 0
      for(let i = 0; i<arrWords.length; i++) {
        models.Word.create({words:arrWords[i]}).then(function() {
          count++
        }).catch(function(error) {
          rej()
        })
      }

      if(count == arrWords.length) {
        res()
      }
    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
