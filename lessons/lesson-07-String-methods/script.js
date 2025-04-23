// let str = 'Привіт'
// console.dir(str);

// let str1 = String(3434)
// console.log(str1);
// console.log(typeof str1);

// let str1 = new String(3434)
// console.log(str1);
// console.log(typeof str1);

// let str = 'Привіт'
// let str = new String('Привіт')
// console.log(str);
// console.log(str.length);

// let x = 4545
// console.log(x.toString());

// let str = 'Привіт'
// let str = ''
// let str = ' '

// str

// if (str.length === 0) {
// if (!str.length) {
//   // console.log("Рядок порожній, нульова довжина");
//   console.log(`Рядок порожній, довжина: ${str.length}`);
// } else {
//   console.log(`Рядок не порожній, довжина: ${str.length}`);
// }

// let s = "Ппривіт"
// // let code = s.charCodeAt(0) // П -  1055
// let code = s.charCodeAt(1) // п - 1087
// console.log(code);
// console.log(String.fromCharCode(1055));
// console.log(String.fromCharCode(1087));
// console.log(String.fromCharCode(code));

// console.log('\u{1F600}');
// console.log('\u{1F604}');
// console.log('\u0041');
// console.log('\u0096');
// console.log('\u1055');

// let s = "Hello, World"

// console.log(s.indexOf('l'));
// console.log(s.indexOf('4'));
// console.log(s.indexOf('l',4));
// console.log(s.indexOf('l',3));
// console.log(s.indexOf('llo'));

// console.log(s.lastIndexOf('l'));
// console.log(s.lastIndexOf('!'));
// console.log(s.lastIndexOf('llo'));

// console.log(s.startsWith('Hell'));
// console.log(s.startsWith('hell'));
// console.log(s.endsWith('!'));
// console.log(s.endsWith('rld'));
// console.log(s.includes(' '));
// console.log(s.includes(','));
// console.log(s.includes('ll'));
// console.log(s.includes('  '));

// let s = "Hello, World"

// // console.log(s.toLowerCase());
// // console.log(s.toUpperCase());

// console.log(s);
// // console.log(s.replace('llo','ya'));
// console.log(s.replace('ll0','ya'));
// console.log(s);

// console.log(s.slice(1,4));
// console.log(s.slice(10));
// console.log(s.slice(1));
// console.log(s.slice(8,15));
// console.log(s.slice(s.indexOf('llo')));

// let s = "Hello, World"

// console.log(s.charAt(0));
// console.log(s.charAt(12));
// console.log(s.charAt(22));
// console.log(s.charAt(s.length-1));

// console.log(s[0]);
// console.log(s[1]);
// console.log(s[18]);
// console.log(s[s.length-1]);


let s = "X"
// let s = "XXXX"
// console.log(s.padStart(3));
// console.log(s.padStart(3).length);

// console.log(s.padEnd(3));
// console.log(s.padEnd(3).length);

console.log(s.padStart(3).replace('  ', "00"));
// console.log(s.padStart(3).replace(' ', "0"));

// console.log("   test  ".length);
// console.log("   test  ".trim().length);
// // console.log("   test  ");
// // console.log("   test  ".trim());

// console.log("   test  ".length);
// console.log("   test  ".trimStart().length);
// console.log("   test  ".length);
// console.log("   test  ".trimEnd().length);

// let str = "apple,banana,orange";
// console.log(str.split(","));

// console.log(['apple', 'banana', 'orange'].join(''));
// console.log(['apple', 'banana', 'orange'].join('-'));
// console.log(['apple', 'banana', 'orange'].join(' '));
// console.log(['apple', 'banana', 'orange'].join(', '));

// console.log("+++".repeat(5));

let word = 'test'
let result = word.replace(word,`${"*".repeat(word.length)}`)
let result1 = word.replace(word,`****`)
console.log(result);
console.log(result1);














