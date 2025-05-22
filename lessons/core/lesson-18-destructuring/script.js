// const stOfBody = document.body.style
// console.dir(stOfBody);


// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'Київ',
//         street: 'Головна'
//     }
// };

// const name = user.name
// const age = user.age
// console.log(`Ваше ім'я ${name} і Ваш вік ${age}`);

// const { age, name, email } = user
// // let { age, name } = user
// // console.log(`Ваше ім'я ${name} і Ваш вік ${age}`);
// // age += 1
// console.log(`Ваше ім'я ${name} і Ваш вік ${age}`);

// const { age: userAge, name: userName } = user
// // console.log(`Ваше ім'я ${name} і Ваш вік ${age}`);
// console.log(`Ваше ім'я ${userName} і Ваш вік ${userAge}`);
// console.log(userAge + 1);
// console.log(userName.toUpperCase());
// console.log(user);

// console.log(age);


// const user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'Київ',
//         street: 'Головна'
//     }
// };

// const { address } = user
// console.log(address);
// const { address: { city: userCity, street: userStreet } } = user
// console.log(address);
// console.log(city);
// console.log(street);
// console.log(userCity);
// console.log(userStreet);

// const { city, street } = user.address;

// const { pr1, pr2, pr3 } = { pr1: "apple", pr2: 'plum', pr3: 'cherry' }
// console.log(pr1, pr2, pr3);


// const colors = ['red', 'green', 'blue', 'yellow'];
// const firstColor = colors[0]
// console.log(firstColor);
// const secondColor = colors[1]
// console.log(secondColor);

// const first = colors[0]
// const second = colors[1]

// const [firstColor, secondColor] = colors
// console.log(firstColor, secondColor);
// const [firstColor, secondColor, last] = [colors[0],colors[1],colors[colors.length-1]]
// console.log(firstColor, secondColor);
// console.log(last);


// const colors = ['red', 'green', 'blue', 'yellow'];

// // const [_,_,_,last] = colors
// let [_,$,_$,last] = colors
// // let [, , , last] = colors
// console.log(last);
// console.log(_);
// console.log($);
// console.log(_$);


// let user = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com',
//     address: {
//         city: 'Київ',
//         street: 'Головна'
//     }
// };
// let { age, name:userName, ...rest } = user
// let { age, name:userName, ...ostacha } = user
// console.log(age); // 30
// console.log(userName);
// console.log(rest);
// console.log(rest.address);
// console.log(rest.address.city);
// console.log(ostacha);

// user = 123
// user.age = 100
// console.log(user.age); // 100
// console.log(age); // 30
// console.log(userName);
// console.log(rest);
// console.log(user);

// let { age, country } = user
// console.log(age);
// console.log(country);


// const colors = ['red', 'green', 'blue'];
// // const [firstColor, secondColor, ...otherElements] = colors
// // console.log(otherElements);
// const [firstColor, secondColor, thirdColor, fourthColor] = colors
// console.log(fourthColor);

// let a = 1
// let b = 2
// ;[a, b] = [b, a]
// console.log(a)
// console.log(b)


// function getUserData() {
//     // щось
//     const x = 564
//     return {
//         id: 1,
//         userName: 'John',
//         role: 'admin'
//     };
// }

// // const oneUserData = getUserData()
// // console.log(oneUserData);
// const {userName, role} = getUserData()
// // const { userName, role } = { id: 1, userName: 'John', role: 'admin' };
// console.log(userName, role);

let user = {
    name: 'John',
    age: 30,
    email: 'john@example.com',
    address: {
        city: 'Київ',
        street: 'Головна'
    }
};

// function printUserInfo(userData) {
//     console.log(userData);
    
// }
// function printUserInfo({name, age}) {
//     console.log(name);
//     console.log(age);
    
// }
// printUserInfo(user)

// const {sin,cos, PI} = Math
// console.log(sin());
// console.log(cos());
// console.log(PI);

// console.log(Math.sin());
// console.log(Math.cos());
// console.log(Math.PI);
