'use strict';

// const testpObj = {
// name: 'vova'


// };

// console.log(testpObj);

// testpObj.test = 'test'; // добавить ключ или перезаписать
// testpObj.test = '';
// // delete testpObj.test; //удалить ключь
// console.log(testpObj);

// const obj = {

//     defaultValue: 0,
//     add: function(){
//         obj.defaultValue+=1;
//     }
// }
//=============================================================
// let increment = obj.add;
// increment();
// obj.mul = function(n){
//     obj.defaultValue *=n;
// }
// obj.mul(3);
// console.log(obj);
//=============================================================
// const obj2 ={
//  defaultValue: 0,
//  add: function(n){
//      obj2.defaultValue +=1;
//  },
//  onPow: function(n){
//     obj2.defaultValue *=n;
// },
// onMinus: function(n){
//     obj2.defaultValue -=n;
// },
// onPlus: function(n){
//     obj2.defaultValue +=n;
// },
// onDel: function(n){
//     obj2.defaultValue /=n;
// },
// showTheValue: function(){
//     console.log(`сумма чисел: ${obj2.defaultValue}`);
// }
// }
// let sum = obj2.add;
// sum();
// console.log(obj2);
// obj2.onPow(10);
// console.log(obj2);
// obj2.onMinus(20);
// console.log(obj2);
// obj2.onPlus(30);
// obj2.onDel(40);
// console.log(obj2);
// obj2.showTheValue();
//====================res========================
// const obj ={
//     a: 1,
//     b: 2,
//     c: 3
// }
// let t=0;
// for(let key in obj){

//     console.log(`${key} ----> ${obj[key]}`); //обращение к значению от ключа
//     t +=obj[key];
// }
// console.log(t);

// const obj2 ={
//     b: 5,
//     c:7
// }

// let obj3 = {... obj, ... obj2};
// console.log(obj3);
//

//========================1===================
// let c;
// const getMe = function(...a){
//     console.log(a);


// }
// console.log(getMe(0, 1, 2, 3, 4, 5, 6, 7, 8));

// for (let i = 10, k = 0; i >= 3; --i, ++k) 
// { 
//     console.log(`${i} ===== ${k}`);
// // cout « i « " " « k « ends; 
// } 



//========================2=============================
// let a= 0;
// const isNumberInRange = function(a){
//     return a<10;
// }
// console.log(isNumberInRange(a));
//========================3=============================
// Сделайте функцию inArray, которая определяет, есть в массиве элемент с заданным текстом или нет.
// Функция первым параметром должна принимать текст элемента, а вторым - массив, в котором делается поиск.
// Функция должна возвращать true или false
// const str = 'яблоко';
// const arr = ['банан', 'яблоко', 'персик'];
// const inArray = function (str, arr) {
//     return arr.includes(str);
// }
// console.log(inArray(str, arr));
//========================4=============================
// Есть массив уникальных чисел uniqueNumbers.
  // Написать функцию, addUniqueNumbers(...),
  // которая получает произвольное кол-во чисел как аргументы,
  // и добавляет в массив uniqueNumbers только уникальные,
  // а те которые в массиве уже есть игнорирует.



