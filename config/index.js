const { createConnection } = require('mysql2')

module.exports = createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: 'Peanut123',
  database: 'daBurger_db'
})
