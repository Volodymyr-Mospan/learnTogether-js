// 1-Конкатенація рядків:
let = film = 'Таксі';
let = year = 1998;
let genre = 'комедія';
let country = 'Франція';
let city = 'Марсель';
let actor = 'Самюель Ле Біон';
let hello =
    `Мої вітання, розповім трохи про свій улюблений фільм. Фільм `
    + film.toLowerCase()
    + `, це фільм `
    + genre
    + `, який вийшов у `
    + year
    + ` році. Події у фільмі відбуваються у `
    + country.slice(0, country.length - 1)
    + `ї, `
    + `а саме у місті `
    + city +
    `.Головну роль виконує `
    + actor
    + ` у фільмі всі кличуть його Данієль.`;
console.log(hello);



// 2-Робота з екрануванням символів:
console.log(`\t'That's one small step for man, \n\t\tone giant leap for mankind.' \n\t\t\t\t\t\t-  Neil Armstrong.`);



// 3-Пошук у рядку:
let virsh = 'Світло кінця тунелю, а за спиною лише темрява.';
console.log(`Позиція, на якій знаходиться слово "світло": ${virsh.indexOf('Світло')}`);
console.log(`Позиція, на якій знаходиться слово "темрява": ${virsh.indexOf('темрява')}`);

console.log(`Чи зустрічається слово "світло" на початку рядка: ${virsh.startsWith('Світло')}!`);
console.log(`Чи зустрічається слово "світло" в кінці рядка: ${virsh.endsWith('Світло')}!`);



// 4-Зміна регістру та зміна чачтини рядка:
let phrase = "Сонце світить яскраво.";
console.log(phrase.toLowerCase().replace("cонце", "місяць"));
