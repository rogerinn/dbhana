'use strict'

const dbcon = require('../../config/dbConnection')

const client = dbcon();

module.exports = {
    getDummy(req, res) {
        let sql = "select * from teste";
        client.connect( (err) => {
            client.exec(sql, (err, rows) => {
                res.json(rows);
                client.end();
            });
        });
    }
}



