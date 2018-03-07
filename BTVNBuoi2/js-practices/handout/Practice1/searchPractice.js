'use strict'

function search(input, target) {
  if(typeof(target) == "undefined"){
    return -1;
  }
  for (var i = 0; i< input.length ; i++){
    if (input[i] == target) return i;
  }
  return -1;
//  return  input.indexOf(target);  // Remove this line and change to your own algorithm
}

module.exports = search
