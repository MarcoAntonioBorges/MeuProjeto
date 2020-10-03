module.exports = app => {
    const Products = app.db.models.Products;

    app.db.sequelize.sync().then(() => {
        app.get('/produtos', (req, res) => {
            //execSQLQuery('SELECT * FROM T_PRODUTO', res);
            Products.findAll({}).then(products => {
                res.json({ produtos: products });
            });
        });
    });

    app.route("/produtos")
        .get((req, res) => {
            // "/produtos": Lista produtos
            Products.findAll({})
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: msg.error });
                });
        })
        .post((req, res) => {
            // "/produtos": Cadastrar um novo produto
            Products.create(req.body)
                .then(result => res.json(result))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        });

    app.route("/produtos/:id")
        .put((req, res) => {
            // "/produtos/1" Atualiza um produto
            console.log(req.params);
            Products.update(req.body, { where: { cd_produto: req.params.id } })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message });
                });
        })
        .delete((req, res) => {
            // "/produtos/1" Exclui um produto
            Products.destroy({ where: { cd_produto: req.params.id } })
                .then(result => res.sendStatus(204))
                .catch(error => {
                    res.status(412).json({ msg: error.message })
                });
        });
};