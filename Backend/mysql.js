// var mysql = require('mysql');
var Sequelize=require('sequelize')

//database define
const db = new Sequelize('database1' , 'root' , 'Shikhyank@12345!' , {
    host : 'localhost',
    dialect : 'mysql' ,
    define: {
    timestamps: false
    }
})

module.exports=db;