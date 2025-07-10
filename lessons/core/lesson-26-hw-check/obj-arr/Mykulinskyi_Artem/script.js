let car = {
    brand: "Audi",
    model: "RS7",
    year: 2025,
    color: "black",

    showCarInfo: function() {
        console.log(`Brand: ${this.brand}, model: ${this.model}, year: ${this.year}, color: ${this.color}`);  
    }
};

car.showCarInfo();

let book = {
    name: "The Hobbit",
    autor: "J. R. R. Tolkien",
    pages: 310,

    showBookInfo: function() {
        console.log(`Book name: ${this.name}, Autor: ${this.autor}, pages: ${this.pages}`);  
    }
};

book.showBookInfo();

let student = {
    name: "Artem",
    surname: "Mykulinskyi",
    grade: 2,

    showStudentInfo: function() {
        console.log(`Hi! My name is ${this.name} ${this.surname}, I study in ${this.grade}\`th grade`);  
    }
};

student.showStudentInfo();