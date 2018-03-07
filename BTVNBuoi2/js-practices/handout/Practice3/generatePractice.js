'use strict'
function random(a,b){
  return Math.floor((Math.random()* (b-a)) + a);
}
function sort(input){
  return input.sort((a,b) => a-b);
}
function search(input,target){
  return input.indexOf(target);
}
function generate(testLengthArray){
    var x = new Array;
    for (var i =0;i<testLengthArray.length ;i ++){
      var y = new Array;
      var len = testLengthArray[i];
      while (len >0){
        var xx = random(-1000,1000);
        y.push(xx);
        len--;
      }
      sort(y);
      var t;
      if (i==0) t=1001;
      if (i==1) t=y[0];
      if (i==2) t = y[y.length-1];
      else t = x[random(1,y.length-1)];
      x.push({
        'input' : y,
        'target' : t,
        'output':search(y,t) 
      });
    }
    return x;
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
