const express = require('express');
const consign = require('consign');

// Instanciando o express
const app = express();

consign({
        verbose: process.env.APP_DEBUG === 'true' || false,
        locale: 'pt-br'
    })
    .include("libs/config.js")
    .then("db.js")
    .then("libs/middlewares.js")
    .then("routes")
    .then("libs/boot.js")
    .into(app);