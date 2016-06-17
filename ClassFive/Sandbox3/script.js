// a. Use a constructor and a loop to create an array of objects, then stringify the entire array and print
// the string to the console or DOM. Copy-and-paste the entire JSON string from that 'print out' into a new file
// 'myData.json' that you save on your laptop.
// var homes = [
//   ['bungalow','hot'],
//   ['modern','super'],
//   ['mid-century','awesome']
// ];
var home = function(style, market) {
  this.style = style;
  this.market = market;
  this.realtor = function () {
    console.log('sell sell sell');
  };
};
// var newHomes = [];
// for (var i = 0; i < homes.length; i++) {
//   newHomes.push(new home(homes[i][0] , homes[i][1]));
// };
//
// console.log(newHomes);
//
// var newerHomes = JSON.stringify(newHomes);
//console.log(newerHomes);
// Use jQuery's .getJSON() to load myData.json, and use .done()
// to set up a function F to run when the data is ready; F should call a function 'P' to print the contents of
// the entire array of objects using a loop or .map().-->

var newestHomes = [];
$.getJSON('data.json',function(homes) {
  $.each(homes, function(index, home) {
    newestHomes.push(home);
    console.log(newestHomes);
  });
}).done(function(){
  display(newestHomes);
});

function display(homes) {
  homes.map(function(home) {
    $('#test').append(
        '<div>' +
            'home style: ' + home.style + '<br>' +
            'home market: ' + home.market +
        '</div>'
    );
  });
}
