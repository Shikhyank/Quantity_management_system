const db=require('./mysql')
var Sequelize=require('sequelize')


//defining the model

const Item=db.define('item',{
    id : {
        type : Sequelize.INTEGER ,
        autoIncrement : true ,
        allowNull : false ,
        primaryKey : true
      } ,
      candyName : {
        type : Sequelize.STRING ,
        allowNull : false
      },
       description: {
          type : Sequelize.STRING ,
          allowNull : false
        },
  
        price : {
          type : Sequelize.BIGINT ,
          allowNull : false
        },
        quantity : {
            type : Sequelize.BIGINT ,
            allowNull : false
          }

});

module.exports=Item;
