'use strict';

const countTotalSalary = function(employees) {

  let total = 0;
  const value = Object.values(employees);


  for(const key in employees){
       console.log(`${key}: ${employees[key]}`);
    }
  for(let key of value){
      total += key;
 
}
  return `Сумма ЗП: ${total}`;
};  

console.log(countTotalSalary({})); // 0

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); // 330

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); // 400