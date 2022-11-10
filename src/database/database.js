const mysql = require('promise-mysql') ;
const config = require('../config');

const getConnection = () => {
 const connection = mysql.createConnection({
    host: config.db.host,
    database: config.db.database,
    user: config.db.user,
    password: config.db.pasword,
    port: 3306
    })   

    return connection
} ;
 




module.exports = {
    getConnection
}
