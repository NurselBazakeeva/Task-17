let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];

let [username, surname, ...info] = arr;

console.log(username);
console.log(surname);
console.log(info);