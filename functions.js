// functions.js
function addTwoNumbers(num1, num2) {

  return num1 + num2

}


function sayHello(name) {
  if (name === "Will") {
    return `No more testing ${name}!`
  } else {
    return `Hi there ${name}!`
}
}


function buildCar(color, type) {
  var parameters = color || type;
  console.log(parameters)
  var vehicle = {
    color: color,
    type: type,
  }
  if (parameters === undefined) {
    return {}
  } else {
    return vehicle
  }
}

module.exports = {
    addTwoNumbers,
    sayHello,
    buildCar,
}
