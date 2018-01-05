$(function() {
    getcookie();
    function getcookie() {
        var obj1 = JSON.parse($.cookie("user"));
        for (var i in obj1) {
            $(".username").html(i)
        }
    }
<<<<<<< HEAD
=======
$(function(){
	getcookie();
	function getcookie(){
	 var obj1=JSON.parse($.cookie("user"));
	 for(var i in obj1){
	 	$(".username").html(i)
	 }
	}
})
>>>>>>> 0161a62ace78f6cd50102bbb1443c7db1097fbe5
})