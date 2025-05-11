//task 1

let film = "Інтерстеллар";
let genre = "наукова фантастика";
let year = 2014;
console.log(film + "-" + genre + ", " + year); //Інтерстеллар-наукова фантастика, 2014


//task 2
const str = "Основна частина \"успіху\" – це з\'явитися в потрібному місці в \"потрібний час\".";
console.log(str);



//task 3
const verse = "Світло кінця тунелю, а за спиною лише темрява";
let indexOfWord = verse.indexOf("Світло");
console.log(indexOfWord); //0
let indexOfWord2 = verse.indexOf("темрява");
console.log(indexOfWord2); //38
indexOfWord === 0 ? console.log("Слово 'Світло' знаходиться на початку рядка") : console.log("Слово 'Світло' не знаходиться на початку рядка");
verse.endsWith("Світло") ? console.log("Рядок закінчується словом 'Світло'") : console.log("Рядок не закінчується словом 'Світло'");

//OR
let wordsStr = verse.split(" ");
if (wordsStr[wordsStr.length - 1] === "Світло") {
    console.log("Слово 'Світло' знаходиться в кінці рядка");
}


//task 4
let phrase = "Сонце світить яскраво";
let phraseToLowerCase = phrase.toLowerCase();
console.log(phraseToLowerCase); //сонце світить яскраво
let replaceWord = phraseToLowerCase.replace("сонце", "місяць");
console.log(replaceWord); //місяць світить яскраво
//OR
let newStr = phrase.toLowerCase().replace("сонце", "місяць");
console.log(newStr); //місяць світить яскраво