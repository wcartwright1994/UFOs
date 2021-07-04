// import the data from data.js
const tableData = data

// Reference the HTML table using d3
var tbody = d3.select('tbody')
    // use d3.select to tell JS to look for
    // the <tbody> tags in the HTML

// Create friends array
let friends = ['Sarah', 'Greg', 'Cindy', 'Jeff'];

// Iterate through the array
function listLoop(userList) {
    for (var i = 0; i < userList.length; i++) {
        console.log(userList[i]);
    }
}
    // var i=0 sets an iterable variable
    // i < userList.length run for all users
    // i++ increases i each time this is run

    // Python Equivalent
    //  for i in user_list:
    //      print(i)

// Vegetables array
let vegetables = ['Carrots', 'Peas', 'Lettuce', 'Tomatoes'];

for (var i = 0; i < vegetables.length; i++) {
    console.log('I love ' + vegetables[i]);
}

// Array with no list
for (var i = 0; i < 5; i++) {
    console.log('I am ' + i);
}

// Functions
{
// Python function example
        //  def print_hello():
        //      print('Hello there!')
    
        // JavaScript console.log statement
        //  function printHello() {
        //      console.log('Hello there!');
        //  }

    // Python addition
    //  def addition(a, b):
    //      return a + b


// JavaScript addition
function addition(a, b) {
    return a + b;
}

// JavaScript nested function
function doubleAddition(c, d) {
    var total = addition(c, d) * 2;
    return total;
}

// use clear() to clear console

////

// Using Arrow functions
// Function 1
function printHello() {
    return "Hello there!";
  }
// Function 1 arrows
printHello = () => 'Hello there!';

// Function 2
function addition(a, b) {
    return a + b;
}
//  Function 2 arrows
addition = (a, b) => a + b;

// Function 3
function doubleAddition(c, d) {
    var total = addition(c, d) * 2
    return total;
}
//  Function 3 arrows
doubleAddition = (c, d) => addition(c, d) * 2
}