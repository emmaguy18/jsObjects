//Passing variable through welcome function//

function yourName(){
  //console.log("button has been clicked");
  var name = prompt ("what is your name?"); //var is now local//
  var age = prompt ("What is your age?");
  console.log(name);
  welcome(name, age);
}

function guest(){
  var age = prompt ("What is your age?");
  welcome("guest", age);
}

function welcome(x, y){
  console.log(x);
  console.log("hello " + x + " you are " + y + " years old") ;
}

function register(){
  var username = prompt ("Please enter a username");
  var usernameValid = validate(username, 4);
  console.log(usernameValid);
  if(usernameValid === false){
    console.log("your username is invalid");
    return;
  }

  var password = prompt ("Please enter a password");
  var passwordValid = validate (password, 6);
  if(passwordValid === false){
    console.log("Your password is invalid");
    return;
  }
  console.log("you are all registered");
}




function validate(value, minLength){
  if(value.length >= minLength){
    return true;
  } else{
    return false;
  }
}






var carType;
var carColour;
var carYear;

var car = {
  type: "Honda",
  colour: "red",
  year: 2009,
  warrent: false,
  owners: ["sam", "jack", "jess"]
}
console.log(car);
console.log(car.year);
console.log(car["year"]);
car.year = 2019;
console.log(car);
console.log(car.year);

car.km= 10000;
console.log(car);

var items = [
  {
    name: "apples",
    price: 2.50,
    inStock: true
  },
  {
    name: "oranges",
    price: 1.45,
    inStock: false
  },
  {
    name: "pears",
    price: 3.00,
    inStock: true
  }
];

for (var i = 0; i < items.length; i++){
    console.log(items [i]);
    if(items [i].inStock === true){
      document.getElementById('list').innerHTML += "<li>" + items[i].name + "- $" +
      items[i].price+"</li>";
    }
  }

var days = [
  {
    day: "monday",
    tasks: ["cleaning", "shopping"]
  }
]
