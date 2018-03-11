'use strict'
function getRandomNumber(a,b){
  return Math.floor(Math.random()*(b-a+1)) + a;
}
function generate(testLengthArray){
  var result = [];
  testLengthArray.forEach((item, index) => {
      var object = {};
    object.input = [];
    for(let i=0; i<item; i++){
      object.input.push(getRandomNumber(-10000,10000));
    }
    switch (index){
      case 0:{
        object.target = 10001;
        break;
      }
      case 1:{
        object.target = object.input[0];
      }
      case 2:{
        object.target = object.input[item-1];
      }
      case 3:{
        object.target = object.input[getRandomNumber(1,item -2)];
        break;
      }
      default:{
        object.target = object.input[getRandomNumber(0,item-1)];
        break;
      }
    }
    result.push(object);
    }   
  );
  return result;
    // var x = new Array;
    // for (var i =0;i<testLengthArray.length ;i ++){
    //   var y = new Array;
    //   var len = testLengthArray[i];
    //   while (len >0){
    //     var xx = random(-1000,1000);
    //     y.push(xx);
    //     len--;
    //   }
    //   sort(y);
    //   var t;
    //   if (i==0) t=1001;
    //   if (i==1) t=y[0];
    //   if (i==2) t = y[y.length-1];
    //   else t = x[random(1,y.length-1)];
    //   x.push({
    //     'input' : y,
    //     'target' : t,
    //     'output':search(y,t) 
    //   });
    // }
    // return x;
  // return Array.from({length : testLengthArray.length})
  //   .map(item => ({
  //     input: Array.from({length: item}).map(item => []),
  //     target: 0,
  //     output: -1
  //   })
  // ); // Remove this line and change to your own algorithm
}

module.exports = generate
