var homes = [{key:'bungalow', value:350000}, {key:'traditional', value:250000}, {key:'old', value: 600000}];;
console.log(homes);

var mapHomes = homes.map(function(home){
  var homeObj = {};
  homeObj[home.key] = home.value;
  return homeObj;
});
console.log(mapHomes);
