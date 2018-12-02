function takeANumber(holdingArr, name){
  holdingArr.push(name); //['Ada']

  return `Welcome, ${name}. You are number ${holdingArr.length} in line.`
}



var takeANumber = function (katzDeli, newCustomer) {
if (katzDeli.length > 0);
katzDeliz.push(newCustomer);
return ('Welcome, ' + newCustomer + ' . You are number ' + katzDeli.length + ' in line. ' )
}
function nowServing (line) {
if (line.length === 0 ) {
return 'There is nobody waiting to be served! ' ;
}
var customer = line.shift() ;
return "Currently serving " + customer + "." ;
}
var currentLine = function (katzDeliLine) {
  if (katzDeliLine.length ===0) {
    return "The line is currently empty." ;
  }
  
  var customerAndNumber = [];
  for (var i=0; i<katzDeliLine.length; i++) {
    customerAndNumber.push(i + 1 + ". " + katzDeliLine[i]) //['1. Bill',  '2. Jane',  '3. Ann']
  }
  
  return "The line is currently: " + customerAndNumber.join(", ");
}
