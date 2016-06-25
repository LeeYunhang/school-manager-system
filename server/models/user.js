/**
 * Created by mrcode on 16-6-24.
 */

let mysql      = require('mysql'),
    process    = require('process'),
    connection;

//according to the number of the command line arguments to decide user, password, etc.
if(process.argv.length >= 4){
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '',
        database : 'comcoursenetwork',
    });
}else{
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : 'qazqaz',
        database : 'test',
    });
}


module.exports = function (callback) {
    connection.connect(error => {
        let data = []
        if (error){
            data.error = 'connection creating failed!'
        }

        connection.query('SELECT * FROM user', (err, rows, fields) => {
            rows = rows || []
            rows = Array.prototype.slice.call(rows)
            for(let i = 0; i < rows.length; ++i){
                data[i] = {}
                data[i].name = rows[i].name
                data[i].no   = rows[i].no
            }
            callback(error, JSON.stringify(data))
            connection.end()
        })
    })
}