var array = [2,3,4,5,6,7,10,2832,4,55,2];

var eachArray =  $(array).each(function(index, value) {
  console.log(index + ' is the index' + ' & the value is ' + value * 2);
});
