func( ['Иван', 'Иванов', 'отдел разработки'] );

function func([username, surname, department, position = 'джуниор']) {
    console.log(username);  
    console.log(surname);  
    console.log(department); 
    console.log(position);  
} 