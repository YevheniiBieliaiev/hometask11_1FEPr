"use strict";
/*1)*/
const vegetable = {
  name: "onion",
  color: "white"
};
const { name, color } = vegetable;
console.log(`First task: ${name}s are usually ${color}`);


/*2)*/
vegetable.shape = "round";
const { shape } = vegetable;
console.log(`Second task: ${name}s are usually ${shape}`);


/*3)*/
const vegetables = [
  {
    name: "cucumber",
    color: "green"
  },
  {
    name: "tomato",
    color: "red"
  },
];

const [cucumber, tomato] = vegetables;
console.log(`Third task:`)
console.log(`${cucumber.name}s are usually ${cucumber.color}`);
console.log(`${tomato.name}s are usually ${tomato.color}`);


/*4)*/
console.log(`Fourth task:`);

let students = [
  { name: 'Kate', age: 25 },
  { name: 'Artur', age: 30 },
  { name: 'Nick', age: 15 },
  { name: 'Alex', age: 28 },
  { name: 'Zhenia', age: 45 },
];

const [firstElememt, secondElement, ...otherElements] = students;
//const [, secondElement] = students;

console.log(secondElement);
//console.log(`Name: ${secondElement.name}, age is ${secondElement.age}`);

console.log(otherElements.length);