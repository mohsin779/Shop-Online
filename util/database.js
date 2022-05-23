//By using  simple SQL
// const mysql=require('mysql2') //npm install --save mysql2

// const pool=mysql.createPool({
//     host:'localhost',
//     user:'root',
//     database:'node-complete',
//     password:'9844'
// });

// module.exports =pool.promise();

////////////////////////////////////////////////////////////////////////////////////////////////

//By using sequelize 
//to install sequelize we also need to first install mysql2

const Sequelize = require('sequelize'); //npm install --save sequelize

// const Sequelize =new Sequelize('databaseName','root','Password');
const sequelize = new Sequelize('node-complete','root','',{
    dialect:'mysql',
    host:'localhost',
});

module.exports=sequelize;
