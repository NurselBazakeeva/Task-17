func( ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000] );

function func([username, surname, ...info]) {
    console.log(username);  
    console.log(surname);  
    console.log(info);
} 