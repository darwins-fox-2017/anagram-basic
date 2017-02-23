'use strict';

var models = require('../models/index');
var util = {};

function lowerSplitSortJoiner(word) {
    return word.toLowerCase().split("").sort().join("")
}

util.anagrams = function(word, source, callback){
var regex = new RegExp(`^[${word}]{${word.length}}$`);
  let anagrams=[];
  console.log(regex);
  for (var i = 0; i < source.length; i++) {
    //console.log(word.split("").sort().join(""),source[i].word.split("").sort().join(""))
    if (lowerSplitSortJoiner(word) == lowerSplitSortJoiner(source[i].words)) {
       anagrams.push(source[i].words);
    }
  }
  callback(anagrams)
}

module.exports = util;
