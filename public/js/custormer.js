$(function(){
    $.ajax({
        url:'http://10.40.153.145:8888/user/findSalesman',
        type:'post',
        success:function(data){
           console.log(data.length);
           for(var i=0;i<data.length;i++){
              $("#userid").append('<option value='+data[i].userId+'>'+data[i].userId+'</option>' )
           }
           renderForm();
        } 
    });
    $(".btn").click(function(){
       $.ajax({
        url:'http://10.40.153.145:8888/customer/addCustomer',
        type:'post',
        data:{
            profile:$("#profile").val(),
            tel:$("#tel").val(),
            email:$("#email").val(),
            state:$("input[type='radio']:checked").val(),
            cause:$("#cause").val(),
            userid:Number($("#userid").val())
        },
        success:function(data){
            console.log(data); 
        } 
   })
 })

})
function renderForm(){
  layui.use('form', function(){
   var form = layui.form;
   form.render();
  });
 }
 
	