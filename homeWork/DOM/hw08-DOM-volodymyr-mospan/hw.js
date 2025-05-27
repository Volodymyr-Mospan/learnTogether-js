// Створіть функцію або функції які наповнюють тег body HTML-тегами article.
// Вміст кожного article додається за допомогою циклу та складається з заголовка -тег h3, зображення - тег img, опису - тег p.
// Вміст тегів та атрибути отримуєте програмно(!) з наданого масиву об'єктів contentArray.
// В проект можна самостійно додати файли-зображень з гугла або створити однотипні зображення-заглушки на сайті https://dummyimage.com/

// Масив об'єктів для генерації контенту
const contentArray = [
  {
    title: "Манго",
    text: "Манго багате на вітамін C та антиоксиданти, корисне для імунітету.",
    imagePath: "./images/mango.webp",
    altText: "Зображення манго",
  },
  {
    title: "Драконів фрукт",
    text: "Драконів фрукт сприяє зниженню рівня цукру в крові.",
    imagePath: "./images/dragonFruit.jpg",
    altText: "Зображення драконівого фрукта",
  },
  {
    title: "Лічі",
    text: "Лічі містить багато вітаміну В, корисне для нервової системи.",
    imagePath: "./images/lychee.webp",
    altText: "Зображення лічі",
  },
  // додайте більше об'єктів за бажанням
];

const bodyRef = document.querySelector("body");

function articleMarkUp(arr) {
  let murkup = "";

  contentArray.forEach(({ title, text, imagePath, altText }) => {
    murkup += `
    <article style="text-align: center; margin: 14px; border: solid, 2px, black; border-radius: 8px">
      <h3>${title}</h3>
      <img src="${imagePath}" alt="${altText}" width="400"/>
      <p>${text}</p>
    </article>
  `;
  });

  return murkup;
}

bodyRef.insertAdjacentHTML("beforeend", articleMarkUp(contentArray));
// display: flex; flex-direction: column
