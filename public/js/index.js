$(function(){

    $("#sub").on('click',function(){
        
        $.ajax({
            url:'http://10.40.153.145:8888/login',
            type:'post',
            data:{
                name:$('#accound').val(),
                password:$('#password').val()
            },
            success:function(data){
                 setcookie();
                if(data==='fail'){
                    $('#err').css('display','block')
                }
                if(data==='salesman'){

                    location.href="html/salesman.html";
                }
                if(data==='admin')
                {
                   location.href="html/admin.html";
                }
            } 
        })
        function setcookie(){
            var obj={};
            obj[$('#accound').val()]=$('#password').val();
            console.log(obj)
             $.cookie.raw = true;
             $.cookie("user",JSON.stringify(obj), { path: "/", expires:7});
        }
    })
})