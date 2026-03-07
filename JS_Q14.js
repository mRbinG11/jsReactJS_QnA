function createCounter() {
  let count = 0; // This is a private variable
  return {
    increment: function () {
      count++;
    },
    decrement: function () {
      count--;
    },
    getCount: function () {
      return count;
    },
  };
}
const counter = createCounter();
counter.increment();
console.log(counter.getCount()); // Output: 1
// console.log(count); // ReferenceError: count is not defined

function TDZ() {
  console.log(counter1); // undefined
  console.log(counter2); // ReferenceError
  var counter1 = 1;
  let counter2 = 2;
}

TDZ();
