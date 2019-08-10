const mysql = require('mysql');
const { promisify } = require('util');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'teste'
});

connection.connect((error)=>{
    if (error) throw error;
    console.log('connected');
});

connection.query = promisify(connection.query);

module.exports = connection;