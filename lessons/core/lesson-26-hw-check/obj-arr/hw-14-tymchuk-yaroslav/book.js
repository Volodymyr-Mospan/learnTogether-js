/**
 * Об'єкт "Книга"
 * @typedef {Object} book
 * @property {string} title - Назва книги.
 * @property {string} author - Автор книги.
 * @property {number} pages - Кількість сторінок книги.
 * @property {function(): void} bookDescription - Метод для відображення інформації про книгу.
 */

const book = {
    title: "11.22.63",
    author: "Стівен Кінг",
    pages: 896,

    bookDescription() {
        console.log(`Назва книги: "${this.title}",  Автор: ${this.author}, Кількість сторінок: ${this.pages}.`);
    }
}


book.bookDescription();
