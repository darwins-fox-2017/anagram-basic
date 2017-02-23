var express = require('express');
var router = express.Router();
var helper = require('../helpers/util');
let model = require('../models')

/* GET home page. */

router.get('/', function(req, res, next) {
  var word = req.query.word;

  // release 2
  res.render('index', {title: 'Anagrams', word: word, anagrams: {} });

  // release 3
  // helper.anagrams(word, function(source, data){
  //   res.render('index', { title: 'Anagrams', word: source, anagrams: data });
  // });

});

router.post('/',function(req, res, next){
  console.log('-----------', typeof req.body.word);
   model.Word.findAll().then(function(words){
     helper.anagrams(req.body.word, words, function(anagrams){
       //console.log(req.body.word);
      res.render('index', {anagrams:anagrams})
    })
   })
})

router.get('/test',function(req, res, next){
   model.Word.findAll().then(function(words){
     res.send(words)
   })
})

module.exports = router;
