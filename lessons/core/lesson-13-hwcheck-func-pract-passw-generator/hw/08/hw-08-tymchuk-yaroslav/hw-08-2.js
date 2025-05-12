let dayOfTheWeek = 4;

let message;

switch (dayOfTheWeek) {
    case 0:
        message = "Понеділок";
        break;
    case 1:
        message = "Вівторок";
        break;
    case 2:
        message = "Середа";
        break;
    case 3:
        message = "Четвер";
        break;
    case 4:
        message = "П'ятниця";
        break;
    case 5:
        message = "Субота";
        break;
    case 6:
        message = "Неділя";
        break;

    default:
        message = "Неправильне число";
        break;
}

console.log(message);
