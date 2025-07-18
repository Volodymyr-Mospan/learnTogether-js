//* ЗАВДАННЯ

/* 
Створити три об'єкти по наданому опису:

Створення об'єкту "Автомобіль":
Створіть об'єкт під назвою автомобіль.
Об'єкт повинен мати властивості: марка, модель, рік та колір.
Додайте метод показатьІнфо(), який буде виводити інформацію про автомобіль у форматі: "Марка: [марка], Модель: [модель], Рік: [рік], Колір: [колір]".

Створення об'єкту "Книга":
Створіть об'єкт під назвою книга.
Об'єкт повинен мати властивості: назва, автор та кількістьСторінок.
Додайте метод описКниги(), який буде виводити інформацію про книгу у форматі: "Назва книги: [назва], Автор: [автор], Кількість сторінок: [кількістьСторінок]".

Створення об'єкту "Студент":
Створіть об'єкт під назвою студент.
Об'єкт повинен мати властивості: ім'я, прізвище та курс.
Додайте метод представлення(), який буде виводити інформацію у форматі: "Привіт! Мене звати [ім'я] [прізвище], я навчаюся на [курс] курсі".
*/

// ============

//* Створення об'єкту "Автомобіль":

const автомобіль = {
  марка: 'Audi',
  модель: 'A6',
  рік: 2018,
  колір: 'білий перламутр',
  'показать інфо': function () {

    return confirm('Чи хочете Ви побачити кумедний варіант ?')
      ? `Маю файний ${this.марка} в нього колір ${this.колір} і він має файний стан бо машиньці 7 рочків \nвона ${this.рік} року була побита в США а тепер катається по Україні \nну це вам не хухри-мухри а справжній ${this.марка} ${this.модель} німці є німці!`
      : `Марка: ${this.марка}, Модель: ${this.модель}, Рік: ${this.рік}, Колір: ${this.колір}`;
    
  },
};

console.log(автомобіль['показать інфо']());

// * Створення об'єкту "Книга":

const книга = {
  назва: 'Маленький Принц',
  автор: 'Антуан де Сент-Екзюпері',
  кількістьСторінок: 112,
  описКниги() {
    return `Назва книги:'${this.назва}', Автор: '${this.автор}', Кількість сторінок: '${this.кількістьСторінок}'`;
  }
};


console.log(книга.описКниги());

// * Створення об'єкту "Студент":

const студент = {
  'ім\'я': 'Джанко',
  прізвище: 'Фарух',
  курс: 4,
  представлення() {
    return `Привіт! Мене звати ${this['ім\'я']} ${this.прізвище}, я навчаюся на ${this.курс} курсі`
  }
}


console.log(студент.представлення());
