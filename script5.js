let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист'];


let [username, surname, department, position = 'джуниор'] = arr;
console.log(username);
console.log(surname);
console.log(department);
console.log(position); 