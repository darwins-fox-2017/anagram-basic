
function test (source,kata){
 let regex=new RegExp(`^[${source}]{${source.length}}$`);

 //let regex
 if(regex.test(kata)){
   return true;
 };
 return false
}

console.log(test('makan','kaamn'));
