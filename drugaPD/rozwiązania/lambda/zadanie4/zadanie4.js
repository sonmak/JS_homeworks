var arr = [1, 3, 5, "mam"];

var f1 = arr => {
  let product = 1;
  for (let i in arr) {
    if (typeof arr[i] === "number") {
      product *= arr[i];
    }
  }
  return product;
};

console.log(f1(arr));
