var date = new Date();
document.body.innerHTML = '<h1> Today is: ' + date + '</h1>';

var a = 5, b = 5, theNumberMatch;

if (a == b) {
  theNumberMatch = true;
} else {
  theNumberMatch = false
}

// console.log('the result: ' + theNumberMatch)
//
// function sum(a,b){
//   var result;
//   result = a + b;
//   console.log('the sumation result is: ' + result)
// }

// (function div(a,b){
//   var result;
//   result = a + b;
//   console.log('the div result is: ' + result);
// })();

// var fun = sum(2,3)
// document.body.innerHTML = '<h1> the result: ' + theNumberMatch + '</h1>';


// announcement function

// var a = 5, b = 6;
// var def_fun = function(){
//   var result;
//   a > b ? result = ['a:',a] : result = ['b', b]
//   return result;
// }

// console.log(def_fun());

// INVOKE function

// var a = 5, b = 6;
// var def_incoke = (function(a , b){
//   var result;
//   a > b ? result = ['a:',a] : result = ['b', b]
//   return result;
// })(5,4)
//
// console.log(def_incoke);

function Persone(name, age, city){
  this.name = name;
  this.age  = age;
  this.city = city;
  this.update_age = function(){
    return ++this.age;
  };
}

var first = new Persone('majed', '20', 'almukalla')
console.log(first)
