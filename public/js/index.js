$(function(){
    $("#sub").on('click',function(){
        $.ajax({
            url:'http://localhost:8888/login',
            type:'post',
            data:{
                name:$('#accound').val(),
                password:$('#password').val()
            },
            success:function(data){
                if(data==='fail'){
                    $('#err').css('display','block')
                }
            }
        })
    })
})