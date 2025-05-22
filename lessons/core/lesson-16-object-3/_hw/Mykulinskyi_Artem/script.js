let i = 10;

if (i % 2 === 0) {
    console.log("Число парне");
}
else {
    console.log("Число непарне")
}

let day = 0;

switch (day) {
    case 0:
        console.log("Понеділок")
        break;
    case 1:
        console.log("Вівторок")
        break;
    case 2:
        console.log("Середа")
        break;
    case 3:
        console.log("Четвер")
        break;
    case 4:
        console.log("П'ятниця")
        break;
    case 5:
        console.log("Субота")
        break;
    case 6:
        console.log("Неділя")
        break;
    default:
        console.log("Неправильне число")
}

const num1 = 14;
const num2 = 15;

const result = num1 > num2
    ? "Перше число більше"
    : (num1 == num2)
        ? "Числа рівні"
        : "Друге число більше"
