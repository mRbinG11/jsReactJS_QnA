let input = {
  a: 1,
  b: { c: 2, d: { e: 3 } },
};

function flattenObject(obj, parentKey = "", result = {}) {
  for (let key in obj) {
    const newKey = parentKey ? parentKey + "." + key : key;
    if (typeof obj[key] === "object" && obj[key] !== null)
      flattenObject(obj[key], newKey, result);
    else result[newKey] = obj[key];
  }
  return result;
}

console.log(flattenObject(input));
