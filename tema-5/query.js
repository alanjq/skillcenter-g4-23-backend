const mysql = require('mysql')
const config = require('./configdb.js')
const { error, log } = require('console')

function getEmployees() {
    return new Promise((resolve, reject) => {
        const connection = mysql.createConnection(config);
        const sql_query = `SELECT * FROM employees LIMIT 100`;

        connection.connect(err => {
            if (err) {
                return reject(`Error connecting to database: ${err.message}`);
            }
        });

        connection.query(sql_query, (err, results, fields) => {
            if (err) {
                connection.end();
                return reject(`Error executing query: ${err.message}`);
            }
            connection.end();
            resolve(results);
        });
    });
}

module.exports = ({ getEmployees })
