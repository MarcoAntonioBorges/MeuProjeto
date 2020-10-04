const cors = require('cors');
const bodyParser = require('body-parser');

module.exports = app => {
    app.set("port", process.env.APP_PORT || 3000);
    app.set("json spaces", 4);


    //configurando o body parser para pegar POSTs mais tarde
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());

    //Configurando Middleware Global da Aplicação 
    app.use((req, res, next) => {
        //Qual site tem permissão de realizar a conexão, no exemplo abaixo está o "*" indicando que qualquer site pode fazer a conexãos
        res.header("Access-Control-Allow-Origin", "*");
        //Quais são os métodos que a conexão pode realizar na API
        res.header("Access-Control-Allow-Methods", 'GET,PUT,POST,DELETE');
        app.use(cors());

        // Middleware de pré-execução das rotas
        delete req.body.id;
        next();
    });

}