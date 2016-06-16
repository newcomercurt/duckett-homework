var x = {
  market: 'hot',
  style: 'modern',
  sell: function() {
    console.log('sell now in Portland, this market is' + this.market);
  }
};
console.log(x);
var houseJson = JSON.stringify(x);
console.log(houseJson);

var newHhouseJson = houseJson.replace('modern','bungalow');
console.log(newHhouseJson);
var y = JSON.parse(newHhouseJson);
console.log(y);
