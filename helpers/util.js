'use strict';

var models = require('../models/index');
var util = {};

util.anagrams = function(word,source, callback){
var regex = new RegExp(`^[${word}]{${word.length}}$`);
  let anagram=[];
  console.log(regex);
  for (var i = 0; i < source.length; i++) {
    //console.log(word.split("").sort().join(""),source[i].word.split("").sort().join(""))
    if (word.toLowerCase().split("").sort().join("")==source[i].word.toLowerCase().split("").sort().join("")) {
       anagram.push(source[i].word);
    }
  }
  callback(anagram)
}

module.exports = util;
