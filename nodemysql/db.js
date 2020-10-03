const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');

let db = null;
var __dirname = path.resolve();

module.exports = app => {
    if (!db) {
        const config = app.libs.config;
        const sequelize = new Sequelize(
            config.database,
            config.username,
            config.password,
            config.params
        );

        db = {
            sequelize,
            Sequelize,
            models: {}
        }

        db.models["Products"] = require("./models/products.js")(sequelize, Sequelize);

        // db.sequelize.sync({ force: true }).then(() => {
        //     console.log("Drop and re-sync db.");
        // });

        // const dir = path.join(__dirname, "models");
        // fs.readdirSync(dir).forEach(file => {
        //     const modelDir = path.join(dir, file);
        //     const model = require(modelDir)(sequelize, Sequelize.DataTypes);

        //     db.models[model.name] = model;
        // });
    }
    return db;
};