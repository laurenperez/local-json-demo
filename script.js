//////// EX. 1

// Demo for pulling information form a local data.json file
// separating out your data keeps your js file short

$.getJSON('data.json', function(data){
 console.log(data);
 $('#my-div').text(data.object.cool);
})



//////// EX. 2

//this turns an object into a string
console.log(JSON.stringify({a:1,b:2}));
//this will turn this string back into an object
console.log(JSON.parse('{"a":1,"b":2}'));
//lets create an object
var list = ['haricuts', 'wartermelons', 64, {"sup":"dog"}, 'planets', [1,2,3,'schnitzel']];
//then send it to local storage

// this will turn the above array in to a JSON string
localStorage.myList = JSON.stringify(list);
//this will turn that string back into a Javascript object
var listValues = JSON.parse(localStorage.myList);
// BUT WHAT IF THE DATA FROM THE API HAS FORMATTING ERRORS???



//////// EX. 3

//there is a built-in way that javascrpt can deal with errors in parsing JSON code
//bring things into your javascript in a try..catch block
try {
  //pass in the thing you want to try to parse
  var listValues = JSON.parse(localStorage.myList);
}catch(err){
  //creates an empty array for storing error data
  var arrForErrCatching = [];
  //console log the array of the errors so that the person doesnt see weird error messages or content on screen
  console.log(arrForErrCatching);
}
