'use strict';

let fs = require('fs')

let model = require('../models')

let wordsInStr = fs.readFileSync('db/fixtures/words.txt').toString()
let arrOfWord = wordsInStr.split('\n')

module.exports = {
    up: function(queryInterface, Sequelize) {
        /*
          Add altering commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkInsert('Person', [{
            name: 'John Doe',
            isBetaMember: false
          }], {});
        */

        console.log('jalan');
        return new Promise(function(res, rej) {
            var promises = [];
            for (var i = 0; i < arrOfWord.length; i++) {
              console.log(arrOfWord[i])
                promises.push(
                    new Promise(function(resolve, reject) {
                        model.Word.create({
                            words: arrOfWord[i]
                        })
                        if (promises.length != 0) {
                            resolve(arrOfWord[i]);
                        } else {
                            reject();
                        }
                    }))
            }

            console.log('---------', promises);

            Promise.all(promises).then(function() {
                console.log('Data inserted');
                res();
            }).catch(function() {
                rej();
            })

        })
    },

    down: function(queryInterface, Sequelize) {
        /*
          Add reverting commands here.
          Return a promise to correctly handle asynchronicity.

          Example:
          return queryInterface.bulkDelete('Person', null, {});
        */
        return queryInterface.bulkDelete('Words', null, {});
    }
};
