// Створити три об'єкти по наданому опису:

//1.  Створення об'єкту "Автомобіль":
// Створіть об'єкт під назвою автомобіль.
// Об'єкт повинен мати властивості: марка, модель, рік та колір.
// Додайте метод показатьІнфо(), який буде виводити інформацію про автомобіль у форматі: "Марка: [марка], Модель: [модель], Рік: [рік], Колір: [колір]".

let theCar = {
  brand: 'Toyota',
  model: 'Auris',
  year: 2007,
  color: 'black',
  showInfo: function () {
    console.log(`Марка: ${this.brand}, Модель: ${this.model}, Рік: ${this.year}, Колір: ${this.color}.`);
  }
};
theCar.showInfo ();

let indentation1 = "\n";
console.log(indentation1);

// 2. Створення об'єкту "Книга":
// Створіть об'єкт під назвою книга.
// Об'єкт повинен мати властивості: назва, автор та кількістьСторінок.
// Додайте метод описКниги(), який буде виводити інформацію про книгу у форматі: "Назва книги: [назва], Автор: [автор], Кількість сторінок: [кількістьСторінок]".

let theBook = {
  title: 'The Lord of the Rings trilogy',
  autor: 'J. R. R. Tolkien',
  pages: 1200,
  descriptionBooks: function () {
    console.log(`Назва книги: ${this.title}, Автор: ${this.autor}, Кількість сторінок: ${this.pages}.`);
  }
};
theBook.descriptionBooks ();

console.log(indentation1);

// Створення об'єкту "Студент":
// Створіть об'єкт під назвою студент.
// Об'єкт повинен мати властивості: ім'я, прізвище та курс.
// Додайте метод представлення(), який буде виводити інформацію у форматі: "Привіт! Мене звати [ім'я] [прізвище], я навчаюся на [курс] курсі".

let student = {
  studentName: 'John',
  Surname: 'Doe',
  course: 'literature',
  introduction: function () {
    console.log(`Привіт! Мене звати ${this.studentName} ${this.Surname}, я навчаюся на курсі ${this.course}.`);
  }
};
student.introduction ();