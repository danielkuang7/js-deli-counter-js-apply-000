function takeANumber(katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.'
}

function nowServing(deliLine){
  if (deliLine.length === 0){
  return 'There is nobody waiting to be served!';
}
 var customer = deliLine.shift();
 return 'Currently serving ' + customer + '.';
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.'
  }
  var numberAndCustomer = [];
  for (var i=0; i<line.length; i++){
    numberAndCustomer.push(i + 1 + '. ' + line[i])
  }
  return 'The line is currently: ' + numberAndCustomer.join(', ')
}
