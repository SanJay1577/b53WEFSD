// // Copy by value and Copy by reference
// // Window & document object
// // Array and JSON iteration
// // XMLHttpRequest

// var a = 15;
// console.log("A : ", a);
// var b;
// b = a;
// console.log("B :", b);
// b = b + 5;
// console.log("A : ", a);
// console.log("B :", b);

// var arrA = [1, 2, 3];
// console.log("arrA", arrA);
// var arrB;
// arrB = arrA;
// console.log("arrA", arrB);
// arrB[0] = 3;
// console.log("arrA", arrA);

// console.log("arrB", arrB);

// function toChnageValue(val) {
//   val = val + 1;
// }
// let givenValue = 5;
// toChnageValue(givenValue);
// console.log(givenValue);

// function toChangeObj(val) {
//   val.name = "gowri";
// }
// let givenObj = {
//   name: "Sanjay",
// };
// console.log(givenObj);
// toChangeObj(givenObj);
// console.log(givenObj);

//array
// const arr = [
//   "sanjay",
//   25,
//   18.9876,
//   true,
//   {
//     name: "sanjay",
//     age: 26,
//     isMentor: true,
//   },
// ];
// console.log(arr);
// // iterate an array
// // index values starts from 0
// console.log("Third index", arr[3]);
// console.log("Fourth index", arr[4].isMentor);

// // keys and values
// const obj = {
//   name: "sanjay",
//   age: 26,
//   isMentor: true,
//   batches: ["B51WD", "B53WE", "B52WD"],
// };

// // iteration of object
// // dot operation
// console.log(obj.age);
// console.log(obj.batches[1]);

// // map operation
// //console.log(obj["name"]);

// const example = [
//   {
//     a: [
//       {
//         b: "b",
//       },
//       {
//         c: [
//           {
//             d: "d",
//           },
//         ],
//       },
//     ],
//   },
// ];

// console.log("Value of D", example[0].a[1].c[0].d);

// window and document
console.log(window);
var aplha = "sanjay";
function abc() {}
console.log(window);
console.log(aplha);
console.log(window.aplha);

// document
console.log(window.document);

// xml http request
//api : https://restcountries.com/v3.1/all

let xhr = new XMLHttpRequest();
console.log(xhr);
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();
xhr.onload = function () {
  // converting string to data
  const data = JSON.parse(xhr.response);
  console.log(data);
  for (let i = 0; i < data.length; i++) {
    console.log(data[i].name.common, data[i].population);
  }
};
