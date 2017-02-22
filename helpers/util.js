'use strict';

var models = require('../models/index');
var util = {};

let isAnagram = function(word, dict) {
  let str1 = word.replace(/\s+/g, '').toLowerCase().split('').sort('').join().trim()
  let str2 = dict.replace(/\s+/g, '').toLowerCase().split('').sort('').join().trim()
  return str1 === str2
}

util.anagrams = function(source){
  if(source === undefined || source === null) {
    return ''
  }
  return new Promise(function(resolve, reject) {
    let arr = [];
    models.Word.findAll()
    .then(function(word) {
      for(let i=0; i<word.length; i++) {
        if(isAnagram(source, word[i].words)) {
          arr.push(word[i].words)
        }
      }
      resolve(arr)
    })
  })
}

module.exports = util;
