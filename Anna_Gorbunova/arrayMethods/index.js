// 1. 
// Пользователь вводит имя, если это имя есть в массиве1 добавьте его копию в массив2

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// const userName = prompt('Enter name', '');

// for (let i = 0; i < people1.length; i++) {
//     if (userName === people1[i]) {
//         people2.push(people1[i]);
//     }
// }
// console.log(people2);


// 2. 
// Пользователь вводит имя, если это имя есть в массиве2 удалите это имя из массива

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];

// const userName = prompt('Enter name', '');

// let indexName = people2.indexOf(userName);
// people2.splice(indexName, 1);
// console.log(people2);


// 3. 
// Создайте новый массив только из тех имен, которые есть в обоих массивах

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let newArr = [];

// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         newArr.push(people1[i]);
//     };
    
// }
// console.log(newArr);


// 4. 
// Объедините два массива так, чтобы в получившемся массиве не было одинаковых имен

// let people1 = ['Samuel', 'Jack', 'Thomas', 'Henry', 'Leo', 'Connor', 'David', 'Ryan'];
// let people2 = ['Connor', 'Stanley', 'Leo', 'Albert', 'Owen', 'Oliver', 'Ethan', 'Thomas'];
// let newArr = [];

// for (let i = 0; i < people1.length; i++) {
//     if (people2.includes(people1[i])) {
//         continue;
//     } else {
//         newArr.push(people1[i]);
//     }
// }
// console.log(people2.concat(newArr));