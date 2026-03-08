function outerFunction() {
  var outerVariable = "I am from the outer function";
  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}
var closure = outerFunction();
closure(); // Output: I am from the outer function
