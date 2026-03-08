let input = [1, [2, [3, [4, 5]]]];

function flattenArray(arr) {
  let result = [];
  for (let item of arr)
    if (Array.isArray(item))
      result = result.concat(flattenArray(item)); // recursive flattening
    else result.push(item);
  return result;
}

console.log(flattenArray(input));
