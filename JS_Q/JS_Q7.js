function checkEvenNumber(num) {
  return new Promise((resolve, reject) => {
    if (typeof num !== "number") {
      reject("Input must be a number");
    } else if (num % 2 === 0) {
      resolve(`${num} is even`);
    } else {
      reject(`${num} is odd`);
    }
  });
}
// Example usage:
checkEvenNumber(10)
  .then((msg) => console.log(msg)) // 10 is even
  .catch((err) => console.error(err));

checkEvenNumber(7)
  .then((msg) => console.log(msg))
  .catch((err) => console.error(err)); // 7 is odd
