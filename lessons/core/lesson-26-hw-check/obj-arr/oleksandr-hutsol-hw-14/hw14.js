// Creating the Car object:
const car = {
    brand: 'Subaru',
    model: 'Forester',
    year: 2011,
    color: 'red',
    showInfo() {
        return `Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}`;
    }
};

// Creating the Book object:
const book = {
    title: '1984',
    author: 'George Orwell',
    pages: 328,
    bookDesc() {
        return `Book title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}`;
    }
};

//Creating the Student object:
const student = new Object();
student.firstName = 'Oleksandr';
student.lastName = 'Hutsol';
student.course = 'Frontend Dev';
student.greeting = function() {
    return `Hello! My name is ${this.firstName} ${this.lastName}, I'm taking the ${this.course} course`
};

//Showing the output of the objects methods in the console 
console.log(car.showInfo());
console.log(book.bookDesc());
console.log(student.greeting());