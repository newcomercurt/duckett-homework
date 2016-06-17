// [+1] A higher order function (HOF) that has a
// function F as a parameter, and calls F. Let F accept one parameter.
// Your app should call the HOF.

var array = [2,3,4,5,6,7,10,2832,4,55,2];

var filterArray = array.filter(f);

function f(value) {
  if (value % 2 == 0) {
    return true;}
  else {
    return false;
  };
};
console.log(filterArray);
