
// [+1.5] A HOF that returns a closure. Your app should call the HOF, then your app should use the closure
function g(param1) {
  var greeting = 'Hello ' + param1;
  var sayGreeting = function() { console.log(greeting + ' I am figuring this thing out ');
  };
  return sayGreeting;
}
var g2 = g('Al and Emily');
g2();
