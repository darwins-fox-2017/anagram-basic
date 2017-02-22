var models = require('./models/index');

isAnagram = function(word, dict) {
  let str1 = word.replace(/\s+/g, '').toLowerCase().split('').sort('').join().trim()
  let str2 = dict.replace(/\s+/g, '').toLowerCase().split('').sort('').join().trim()
  return str1 === str2
}

let count = 0
let arr = []
models.Word.findAll().then(function(word) {
  for(let i=0; i<word.length; i++) {
    count++
    if(isAnagram("apel", word[i].words)) {
      arr.push(word[i].words)
    }
  }
  console.log(arr)
})




    <% if (words) { %>
    <ul>
      <% for(let i=0; i<words.length; i++) { %>
      <li><%= words[i] %></li>
      <% } %>
    </ul>
    <% } %>
