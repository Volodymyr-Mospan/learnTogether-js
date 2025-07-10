/**
 * Об'єкт "Студент"
 * @typedef {Object} student
 * @property {string} name - Ім'я студента.
 * @property {string} lastName - Прізвище студента.
 * @property {number} course - Курс студента.
 * @property {function(): void} showInfo - Метод для відображення інформації про студента.
 */
 

const student = {
    name: "Ярослав",
    lastName: "Тимчук",
    course: 1,

    showInfo() {
        console.log(`Привіт! Мене звати ${this.lastName} ${this.name}, я навчаюся на ${this.course} курсі.`);
    },
};

student.showInfo();
