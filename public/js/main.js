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
    res.append("Access-Control-Allow-Origin", "*");
    connection.query('SELECT * FROM userinfo', function (error, results, fields) {
        if (req.body.name == results[0].account && req.body.password == results[0].pwd) {
            if (results[0].identify == '业务员') {
                res.send('salesman');
            }
        } else {
            res.send('fail');
        }
    });
})

//admin && salesman  update infomation
app.post('/user/updateInfo', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`update userinfo set pwd = ${req.body.password} , tel = ${req.body.tel} , email = ${req.body.email} where userId = ${req.body.userid}`, function (error, results, fields) {
        if (error) {
            res.send('fail');
            return;
        } else {
            res.send('success')
        }
    });
})

//admin && salesman  update infomation
app.post('/customer/updateCustomer', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`update customer set profile = ${req.body.profile} , tel = ${req.body.tel} , email = ${req.body.email} , state = ${req.body.state} , cause = ${req.body.cause} , userId = ${req.body.userid}  where customerId = ${req.body.customerid}`, function (error, results, fields) {
        if (error) {
            res.send('fail');
            return;
        } else {
            res.send('success')
        }
    });
})

//add userinfo
app.post('/user/addInfo', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    var data = new Date();
    connection.query(`insert into userinfo values (${req.body.accound},${req.body.password},${req.body.identify},${req.body.tel},${req.body.email},${data})`, function (error, results, fields) {
        if(error){
            res.send('fail');
        }else{
            res.send('success');
        }
    });
})

//add customer
app.post('/customer/updateCustomer', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`insert into customer values (${req.body.tel},${req.body.email},${req.body.profile},${req.body.userid},${req.body.state},${req.body.cause})`, function (error, results, fields) {
        if(error){
            res.send('fail');
        }else{
            res.send('success');
        }
    });
})

//update product
app.post('/product/addProduct', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`update product set name=${req.body.name} , price = ${req.body.price},img = =${req.body.img}, notic = ${req.body.notic} where productId = ${req.body.productid}`, function (error, results, fields) {
        if(error){
            res.send('fail');
        }else{
            res.send('success');
        }
    });
})

//get all product
app.post('/product', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`select * from product`, function (error, results, fields) {
        if(error){
            res.send('fail');
        }else{
            //console.log(results)
            res.send(results);
        }
    });
})

//get product by id
app.post('/product', function (req, res) {
    res.append("Access-Control-Allow-Origin", "*");
    connection.query(`select * from product where productId = ${req.body.producrid}`, function (error, results, fields) {
        if(error){
            res.send('fail');
        }else{
            res.send(results[0]);
        }
    });
})

//add oder
// app.post('/oder/addorder', function (req, res) {
//     res.append("Access-Control-Allow-Origin", "*");
//     var date = new Date();
//     connection.query(`insert into oder values (${date},${req.body.customerid},${req.body.userid},${req.body.productid})`, function (error, results, fields) {
//         if(error){
//             res.send('fail');
//         }else{
//             res.send('success');
//         }
//     });
// })

app.listen(8888);
console.log('start server')