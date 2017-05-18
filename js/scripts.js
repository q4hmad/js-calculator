
var num1 = parseInt(prompt("enter a number"));
var num2 = parseInt(prompt("enter a second number"));

var response = function(theAnswer) {
  alert(theAnswer);
};

var add = function(num1, num2) {
  return num1 + num2;
};

var subtract = function(num1, num2) {
  return num1 - num2;
};

var multiply = function(num1, num2) {
  return num1 * num2;
};

var divide = function(num1, num2) {
  return num1 / num2;
};

response("Your answer is" + multiply(num1, num2));
