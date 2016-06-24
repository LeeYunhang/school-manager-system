/**
 * Created by mrcode on 16-6-24.
 */

var mysql      = require('mysql');
var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'qazqaz',
    database : 'test',
});



module.exports = function (callback) {
    connection.connect(error => {
        let data = {}
        if (error){
            data.error = 'connection creating failed!'
        }

        connection.query('SELECT * FROM user', (err, rows, fields) => {
            rows = Array.prototype.slice.call(rows)
            for(let i = 0; i < rows.length; ++i){
                data[i + ''] = {}
                data[i + '']['no']   = rows[i].no
                data[i + '']['name'] = rows[i].name
            }

            callback(data)
        })


    })
}