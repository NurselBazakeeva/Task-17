function func() {
	return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
}

let [username, surname, department, position, salary]= func();

console.log(username);
console.log(surname);
console.log(department);
console.log(position);
console.log(salary); 