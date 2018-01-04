# SIMS
组长：王晓堂   组员：温富欣  黄聪汉  陈海超 


# 登录

请求方式:post

url:http://10.40.153.145:8888/login

传递参数:name,password

返回类型:string

返回值:"fail"（账号或密码错误）  "salesman"（进入销售员的界面）  "admin"（进入管理员的界面）



# 管理员、业务员修改个人资料    //只可修改密码、联系方式、邮箱

请求方式:post

url:http://10.40.153.145:8888/updateInfo

传递参数:userid,password,tel,email

返回类型:string

返回值:"fail"（修改错误）  "success"（修改成功）



# 修改客户资料    //只可修改密码、联系方式、邮箱

请求方式:post

url:http://10.40.153.145:8888/updateCustomer

传递参数:costomerid,profile,tel,email,state,cause,userid

返回类型:string

返回值:"fail"（修改错误）  "success"（修改成功）