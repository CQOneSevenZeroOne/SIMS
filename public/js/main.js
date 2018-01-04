var express = require('express');
var app = express();
var mysql = require('mysql');
var bodyParser = require('body-parser');
var multer = require('multer'); 

// for parsing application/json
app.use(bodyParser.json()); 
 // for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// 创建连接
var connection = mysql.createConnection({
    host: '10.40.153.98',
    user: 'sa1',
    password: '123',
    database: 'crm'
});

// 进行连接数据库
connection.connect();

//接收登录请求
app.post('/login', function (req, res) {
res.append("Access-Control-Allow-Origin","*");
    connection.query('SELECT * FROM userinfo', function (error, results, fields) {
        if(req.body.name==results[0].account && req.body.password==results[0].pwd){
            if(results[0].identify=='业务员'){
                res.send('业务员');
            }
        }else{
            res.send('fail');
        }
    });
})

app.listen(8888);
console.log('start server')