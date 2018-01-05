<<<<<<< HEAD
$(function() {
    getcookie();

    function getcookie() {
        var obj1 = JSON.parse($.cookie("user"));
        for (var i in obj1) {
            $(".username").html(i)
        }

    }
=======
$(function(){
	getcookie();
	function getcookie(){
	 var obj1=JSON.parse($.cookie("user"));s
	 for(var i in obj1){
	 	$(".username").html(i)
	 }
	}
>>>>>>> 676480f82ed0a36fc3586c0c7283d7719872c2f2
})