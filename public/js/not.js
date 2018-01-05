$(function(){
	('#xclick').on('click',function(){
		$.ajax({
			url:'http://10.40.153.98:888/notice',
            type:'post',
            data:{
            		id:id,
            		userid:userid,
            		time:time,
            		title:title,
            		content:content
                  },
            success:function(data){
                
            } 
		})
	})
})