"use strict";

/**
 * @type {undefined} - The undefined variable
 */
let result;

/**
 * @typedef {Object} car
 * @property {string} brand - The company that creates a car
 * @property {string} model - The model is a car
 * @property {number} year - The year of the car
 * @property {string} color - The color of the car
 * @property {function():string} showInfo - The method that outputs information about a car
 */

const car = {
    brand: "Ford",
    model: "Focus",
    year: 2018,
    color: "blue",
    showInfo() {
        return `Brand - ${this.brand}, Model - ${this.model}, Year - ${this.year}, Color - ${this.color}`;
    },
};
/**
 * @type {string} - The result returns the method showInfo
 */
result = car.showInfo();
console.log(result);

/**
 * @typedef {Object} book
 * @property {string} name - The name is a book
 * @property {string} author - The name is a author
 * @property {number} numberPage - The page number of this book
 * @property {function():string} descBook - The method for output information about a book
 */

const book = new Object();
book.name = "Мистецтво війни";
book.author = "Сунь-цзи";
book.numberPages = 250;
book.descBook = function () {
    return `Name - ${this.name}, Author - ${this.author}, Number pages - ${this.numberPages}`;
};

/**
 * @type {string} - The result return the method descBook
 */
result = book.descBook();
console.log(result);

/**
 * @typedef {Object} student
 * @property {string} name - The student's name
 * @property {string} surname - The student's surname
 * @property {number} course - The number of a course
 * @property {function():string} sayHello  - The method for output information about a student
 */
const student = {
    name: "Yura",
    surname: "Buchko",
    course: 2,
    sayHello() {
        return `Привіт, мене звуть ${this.name} ${this.surname}, я навчаюсь на ${this.course} курсі`;
    },
};
/**
 * @type {string} - The result return the method sayHello
 */
result = student.sayHello();
console.log(result);
