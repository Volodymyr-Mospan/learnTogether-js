// console.log(Number(33));
// console.log(new Number(33));
// console.log(Number('55'));
// console.log(typeof Number('55'));
// console.log(Number('55UAH')); // NaN
// console.log(typeof Number('55UAH'));

// console.log(1000 / 0);
// console.log(1000 / -0);
// console.log(0 / 0); // NaN
// console.log(1 * "five");
// console.log(1 * Number("five"));
// console.log(1 * NaN);

// console.log(1 * "five");
// console.log(1 / "five");
// console.log(1 - "five");
// console.log(1 + "five");

// console.log("five" + 1);
// console.log("five" + String(1));
// console.log("five" + "1");

// console.log("five" + " " + "floor");

// console.log(isNaN(4 / "123r")); // true
// console.log(isNaN(23)); // false
// console.log(isNaN("abc")); // true

// console.dir(Number);

// console.log(Number.isNaN(4 / "123r")); // true
// console.log(Number.isNaN(NaN)); // true
// console.log(Number.isNaN(23)); // false
// console.log(Number.isNaN("abc")); // false

// console.log(isNaN("1212")); 
// console.log(isNaN(Number("1212"))); 
// console.log(Number.isNaN("1212")); 


// console.log(Number("1212"));
// console.log(Number("12") + 23);
// console.log(typeof Number("1212"));

// console.log(parseInt("12"));
// console.log(parseFloat("12.45"));
// console.log(parseFloat("12,45"));
// console.log(parseFloat("w1245"));
// console.log(typeof parseInt("12"));
// console.log(typeof parseFloat("12.45"));

// console.log(parseInt("12.sefsdf"));
// console.log(parseFloat("12.45dfsdfsdf"));
// console.log(parseFloat("12dfsdfsdf"));

// console.log(+"12");
// console.log(typeof(+"12"));
// console.log(-"12");
// console.log(typeof(-"12"));

// const binaryString = "1010"
// console.log(parseInt(binaryString,2));
// console.log(parseInt('1A',16));


// function hexToRgb(hex) {
//     // Видаляємо #, якщо він є
//     hex = hex.replace(/^#/, '');

//     // Якщо формат короткий (наприклад, #f53), конвертуємо в повний (#ff5533)
//     if (hex.length === 3) {
//         hex = hex.split('').map(char => char + char).join('');
//     }

//     // Отримуємо значення R, G, B, використовуючи parseInt з основою 16
//     const r = parseInt(hex.substring(0, 2), 16);
//     const g = parseInt(hex.substring(2, 4), 16);
//     const b = parseInt(hex.substring(4, 6), 16);

//     return { r, g, b };
// }

// console.log(hexToRgb('#ff5733')); // { r: 255, g: 87, b: 51 }
// console.log(hexToRgb('#f53'));    // { r: 255, g: 85, b: 51 }

// const bigNumberLiteral = 1234567890123456789012345678901234567890n;

// console.log(9007199254740993);
// console.log(BigInt(9007199254740993)); // -
// console.log(BigInt("9007199254740993")); // +

// const numIntNum = 42
// const bigIntNum = 12121212n
// console.log(numIntNum + bigIntNum);
// console.log(BigInt(numIntNum) + bigIntNum);




