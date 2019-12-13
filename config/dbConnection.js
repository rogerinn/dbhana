'use strict'
const hdb = require("hdb");
module.exports = () => {
  return hdb.createClient({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS
  });
}