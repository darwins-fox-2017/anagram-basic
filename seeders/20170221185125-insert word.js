'use strict';
let model= require('../models')
const fs = require('fs');
let wordstr = fs.readFileSync('db/fixtures/words.txt').toString();
let wordarr=wordstr.split('\n')
module.exports = {
  up: function (queryInterface, Sequelize) {

    return new Promise(function(res,rej){
        var promises=[];
        for (var i = 0; i < wordarr.length; i++) {
           promises.push(
              new Promise(function(resolve,reject){
                model.Word.create({word:wordarr[i]})
                if (promises.length!=0) {
                    resolve(wordarr[i]);
                } else {
                   reject();
                }
              }))
        }
       Promise.all(promises).then(function(){
         console.log('insert success');
         res();
       }).catch(function(){
         rej();
       })

    })
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:*/
      return queryInterface.bulkDelete('Person', null, {});

  }
};
