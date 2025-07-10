const car = {
    brand: "reno",
    model: "megane",
    color: "red",
    year: 2005,
    showInfo: function(){
        console.log(`Марка: ${this.brand}, Модель: ${this.model},  Рік: ${this.year}, Колір: ${this.color}`)
    }
}

car.showInfo();

const book = {
    name: "Посібник з убивства для хорошої дівчинки",
    author: "Голлі Джексон",
    pages: 317,
    descriptionBook: function(){
        console.log(`Назва книги: ${this.name}, Автор: ${this.author}, Кількість сторінок: ${this.pages}`)
    }
}

book.descriptionBook();

const student = {
 first: "Іван", 
 last: "Iванов",
 course: 2,
 view: () => {
    console.log(`Привіт! Мене звати ${student.first} ${student.last}, я навчаюся на ${student.course} курсі`)
 }
}

student.view()

   

