const obj = { a: 1, b: { c: 2 } };
const shallowCopy = { ...obj };

shallowCopy.a = 10;  // Changes only in the copy
shallowCopy.b.c = 20; // Changes in both copy and original

console.log(obj.b.c); // 20 (Mutated)
console.log(shallowCopy.b.c); // 20

console.log(shallowCopy.a); // 20

let arr = [1,2,3,4,5];

console.log("arr",arr =  JSON.stringify(arr));

console.log(arr[1]); // 20 (Mutated)




