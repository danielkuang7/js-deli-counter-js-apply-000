function takeANumber(katzDeli, newCustomer){
  katzDeli.push(newCustomer);
  return 'Welcome, ' + newCustomer + '. You are number ' + katzDeli.length + ' in line.';
}

function nowServing(deliLine){
  if (deliLine.length === 0){
    return 'There is nobody waiting to be served!';
  }
  var name = deliLine.shift();
  return 'Currently serving ' + name + '.';
}

function currentLine(line){
  if (line.length === 0){
    return 'The line is currently empty.';
  }
  var number = [];
  for (var i=0; i<line.length; i++){
    number.push(i + 1 + '. ' + line[i]);
  }
  return 'The line is currently: ' + number.join(', ');
}
