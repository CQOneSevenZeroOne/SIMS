# SIMS
组长：王晓堂   组员：温富欣  黄聪汉  陈海超 


# 登录

请求方式:post

url:http://10.40.153.145:8888/login

传递参数:name,password

返回类型:string

返回值:"fail"（账号或密码错误）  "salesman"（进入销售员的界面）  "admin"（进入管理员的界面）

# 新增管理员或业务员账号

请求方式:post

url:http://10.40.153.145:8888/user/addInfo

传递参数:accound,password,tel,email,identify

返回类型:string

返回值:"fail"（新增失败）  "success"（新增成功）

# 管理员、业务员修改个人资料    //只可修改密码、联系方式、邮箱

请求方式:post

url:http://10.40.153.145:8888/user/updateInfo

传递参数:userid,password,tel,email

返回类型:string

返回值:"fail"（修改失败）  "success"（修改成功）



# 修改客户资料    //只可修改密码、联系方式、邮箱

请求方式:post

url:http://10.40.153.145:8888/customer/updateCustomer

传递参数:customerid,profile,tel,email,state,cause,userid

返回类型:string

返回值:"fail"（修改失败）  "success"（修改成功）

# 新增客户资料

请求方式:post

url:http://10.40.153.145:8888/customer/updateCustomer

传递参数:profile,tel,email,state,cause,userid

返回类型:string

返回值:"fail"（新增失败）  "success"（新增成功）

# 新增商品信息

请求方式:post

url:http://10.40.153.145:8888/product/addProduct

传递参数:name,price,img,notic

返回类型:string

返回值:"fail"（新增失败）  "success"（新增成功）

# 修改商品信息

请求方式:post

url:http://10.40.153.145:8888/product/updateProduct

传递参数:productid,name,price,img,notic

返回类型:string

返回值:"fail"（新增失败）  "success"（新增成功）

# 查询所有商品信息

请求方式:post

url:http://10.40.153.145:8888/product

返回类型:string

返回值:[{}]

# 查询单个商品信息

请求方式:post

url:http://10.40.153.145:8888/product

传递参数:productid

返回类型:string

返回值:{}
<!-- # 新增订单

请求方式:post

url:http://10.40.153.145:8888/oder/addorder

传递参数:customerid,userid,productid

返回类型:string

返回值:"fail"（新增失败）  "success"（新增成功） -->