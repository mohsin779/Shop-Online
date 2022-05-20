const mysql=require('mysql2') //npm install --save mysql2

const pool=mysql.createPool({
    host:'localhost',
    user:'root',
    database:'node-complete',
    password:'9844'
});

module.exports =pool.promise();