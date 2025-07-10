//! Створення об'єкту "Автомобіль":

const auto = {
    brand: 'Opel',
    model: 'Astra',
    year: 2010,
    color: 'grey',
    showInfo: function () {
        console.log(`Марка: ${this.brand},\nМодель: ${this.model},\nРік: ${this.year},\nКолір: ${this.color}.`);
    }
}

auto.showInfo()



//! Створення об'єкту "Книга":

const book = {
    name: '11/22/63',
    author: 'Stiven King',
    pages: 890,
    descriptionBook() {
        console.log(`Назва книги: ${book.name}, Автор: ${book.author}, Кількість сторінок: ${book.pages}.`);
    }
}

book.descriptionBook()



//! Створення об'єкту "Студент":

const student = {
    name: 'Тарас',
    surname: 'Франко',
    course: 1,
    greeting() {
        console.log('Привіт! Мене звати ' + this.name + ' ' + this.surname + ', я навчаюся на ' + this.course + ' курсі.');
    }
}

student.greeting()