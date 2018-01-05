$(function(){
	var str = '';
	$.ajax({
		url:'http://10.40.153.145:8888/notic/getAllNotic',
		type:'post',
		success:function(data){	
			for(var i= 0;i<data.length;i++){			
				str+='<li><em>'+data[i].id+'</em><span><a href="notcontent.html" class = "click">'+data[i].title+'</a></span><strong>'+data[i].time+'</strong></li><hr>';
			}
			$("#tbody").html(str);
		}
	})
//	$('#xclick').on('click',function(){
//		$.ajax({
//			url:'http://10.40.153.145:8888/notic/getAllNotic',
//          type:'post',
//          data:{
//          		id:$("#id").text,
//          		userid:$("#userid").text,
//          		time:$("#time").text,
//          		title:$("#title").text,
//          		content:$("#content").text
//                },
//          success:function(data){
//              console.log(data)
//          } 
//		})
//	})
})
