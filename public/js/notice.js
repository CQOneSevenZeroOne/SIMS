var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer');
//创建连接
var connection = mysql.createConnection({
<<<<<<< HEAD
    host: '10.40.153.98',
    user: 'sa1',
    password: '123',
    database: 'crm'
});
//连接
connection.connect();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
//接收notice请求
app.post('/')


app.listen(888);
console.log('start server')
=======
	host:'10.40.153.98',
	user:'sa1',
	password:'123',
	database:'crm'
})
//连接数据库
connection.connect();
//
>>>>>>> master
