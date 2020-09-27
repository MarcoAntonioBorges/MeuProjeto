const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 3000; //porta padrão
const mysql = require('mysql');

//configurando o body parser para pegar POSTS mais tarde
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


//definindo as rotas
const router = express.Router();
router.get('/', (req, res) => res.json({ message: 'Funcionando!' }));

router.get('/produtos', (req, res) =>{
    execSQLQuery('SELECT * FROM T_PRODUTO', res);
});

router.post('/produtos', (req, res) => {
    var produto = {
        nome: req.body.nome
    }
    execSQLQuery('INSERT INTO T_PRODUTO(nm_produto, ds_produto, dt_fabricacao, vl_produto) VALUES('+ " '"+ produto.nome +"' " +", 'TESTE', '20200101', 300)", res);
});


app.use('/', router);

app.listen(port);


function execSQLQuery(sqlQry, res){
    const connection = mysql.createConnection({
        host     : 'localhost',
        port     : 3306,
        user     : 'root',
        password : 'password',
        database : 'PROJETO_MEU_PRODUTO'
    });
 
  connection.query(sqlQry, function(error, results, fields){
      if(error) 
        res.json(error);
      else
        res.json(results);
      connection.end();
      console.log('executou!');
  });
}