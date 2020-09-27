const mysql = require('mysql');
const connection = mysql.createConnection({
    host     : 'localhost',
    port     : 3306,
    user     : 'root',
    password : 'password',
    database : 'PROJETO_MEU_PRODUTO'
});

connection.connect(function(error){
    if(error) {
        return console.log(error);
    }
    console.log('CONEXAO FEITA COM SUCESSO!! :) ');
});