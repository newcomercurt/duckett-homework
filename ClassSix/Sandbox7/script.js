// [+1] +1] A HOF that returns a function G. G accepts two parameters.
//  Your app should call the HOF, then your app should use the returned function

// Additionally, you can toggle specific options in the Configure
// menu.

function g (param1, callback) {
  console.log (param1 + ' this is an hof in action ');
  if (callback){
    callback();
  }
}
g('hello', function () {
  console.log('see me work!');
});
g('hello');
