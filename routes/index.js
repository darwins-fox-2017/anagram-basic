var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
var models = require('../models')

/* GET home page. */


router.get('/', function(req, res, next) {
  var word = req.query.word;
  console.log("dia dari sini")

  if(word) {
    console.log("dia masuk kesini");
    helper.anagrams(word).then(function(arr) {
      console.log("dia masuk kesini");
      res.render('index', {title: 'Anagrams', word:arr, whatwords: req.query.word})
    })
  } else {
    console.log("dia masuk kesana");
    res.render('index', {title: 'Anagrams', word: ''});
  }
});

module.exports = router;
