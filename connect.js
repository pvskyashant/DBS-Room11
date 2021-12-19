var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "MYSQL@123456"
});
con.connect(function(err) {
  if (err) throw err;
  console.log("connected");
con.query("select * from stock.customerdata",function(err,result,fields){
      if(err) throw err;
      console.log(result);
  });
  });