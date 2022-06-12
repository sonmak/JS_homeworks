var arr = [1, 2, 3, 4, 5, 7, 6, 6]

console.log(arr);
arr.pop();
console.log("After deleting the last element: "+arr);
arr.push(3);
console.log("After pushing the element: "+arr);
arr.shift();
console.log("After deleting the first element: "+arr);
arr.unshift(4);
console.log("After adding element: "+arr);
console.log("The amount of elements in the array: " + arr.length);
console.log("the elements in array between second and forth index "+arr.slice(2,4));
console.log("The fist index at which given element can be found in the array "+arr.indexOf(6));