/**
 * Генерує випадковий пароль із букв, цифр і, за бажанням, спеціальних символів.
 * 
 * @param {number} lengthData - Довжина паролю (має бути більше 0)
 * @param {boolean} useSpecialChars - Включати спеціальні символи чи ні
 * @return {string} - Повертає згенерований пароль
 * 
 * @example
 * // Генерує пароль довжиною 8 символів без спеціальних символів
 * generatePassword(8, false);
 * 
 * @example
 * // Генерує пароль довжиною 14 символів з усіма можливими символами
 * generatePassword(14, true);
 * */
function generatePassword(lengthData, useSpecialChars) {


  
    const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialChars = "!@#$%^&*()-=_+[]{}|;:',.<>?";

    let characters = letters + numbers;
    if (useSpecialChars) {
        characters += specialChars;
    }
    console.log(characters);

    let password = '';


    // console.log(characters.length);
    // console.log("\n");
    for (let i = 0; i < lengthData; i++) {
        // console.log(characters[i]);
        const randomIndex = Math.floor(Math.random() * characters.length);
        // console.log(randomIndex);

        // password = password+characters[randomIndex];
        password += characters[randomIndex];
        console.log(password);


    }

    return password
}

const passw1 = generatePassword(8, false);
console.log(passw1)
console.log("\n");

const passw2 = generatePassword(14, true);
console.log(passw2)
