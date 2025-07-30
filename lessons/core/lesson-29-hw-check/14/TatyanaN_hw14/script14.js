console.log(`1. Створення об'єкту "Автомобіль"`);

const car = {
    make: 'Mercedes',
    model: 'Mercedes-AMG-G63',
    color: 'Black',
    year: '2024',
    start: function () {
        console.log('Starting....');
    },
    whichModel: function () {
        console.log(`The model of the car is ${this.model}`);
    },
    info: function () {
        console.log(`        
        Марка: ${this.make},
        Модель: ${this.model},
        Рік: ${this.color},
        Колір:${this.year}`);
    }
};
console.log(car.start());
console.log(car.whichModel());
console.log(car.info());

let book1 = {
    title: 'The Hobbit',
    author: 'J.R.R. Tolkien',
    pages: 310,
    read: false,
    markAsRead: function () {
        if (this.read === true) {
            console.log('read')
        } else { console.log("keep reading") };
    }
};
console.log(book1.markAsRead());
console.log('------------');
console.log(`2. Створення об'єкту "Книга"`);

let book = {
    title: 'It',
    author: 'Stephen King',
    pages: 1138,
    genre: 'horror',
    published: 1986,
    bookInfo: function () {
        console.log(`
            Назва книги: ${this.title}
                    Автор: ${this.author}
                    Кількість сторінок: ${this.pages}`
        );
    }
};
console.log(book.bookInfo());
console.log(book['published']);
let genre2 = 'genre';
console.log(book[genre2]);
let published2 = 'published';
console.log(book[published2]);


console.log('---------');
console.log(`3. Створення об'єкту "Студент"`);

let student = {
    name: 'Tatyana',
    lastname: 'Nadtochiy',
    education: 'Fontend Developer',
    greeting: function () {
        console.log(`Hello! My name is ${this.name} ${this.lastname}. I'm studing on ${this.education} course.`);
    }
}
console.log(student.greeting());

console.log('hello');

