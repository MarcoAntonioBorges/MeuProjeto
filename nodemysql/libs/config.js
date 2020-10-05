const dotenv = require('dotenv').config();

module.exports = {
    database: process.env.DATABASE_STORAGE,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    params: {
        dialect: process.env.DATABASE_DIALECT,
        host: process.env.DATABASE_HOST,
        port: process.env.DATABASE_PORT,
    }
};