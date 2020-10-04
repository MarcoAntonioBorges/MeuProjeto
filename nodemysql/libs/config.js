module.exports = {
    database: process.env.DATABASE,
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    params: {
        dialect: process.env.DIALECT,
        host: process.env.HOST,
        port: process.env.DB_PORT
    }
};