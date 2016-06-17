$(function() {
  var homes = ['bungalow','modern','new'];
  console.log(homes);
  //adds old to end of array
  homes.push('old');
  console.log(homes);
  //removes last elememt from array
  homes.pop();
  console.log(homes);
  //removes first element from array
  homes.shift();
  console.log(homes);
  //adds best to begging of array
  homes.unshift('best');
  console.log(homes);
});
