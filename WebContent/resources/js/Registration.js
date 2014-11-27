
$(document).ready(function(){ 
	$("#lblDisplayMsg").text("");
	$("#lblDisplayMsg1").text("");
     });

function mySubmitFunction(){
	value = $('#frm1').serialize();
    $.ajax({
 	type: "POST",
     url: "../com.ssdi.studentbudgetcenterserver/rest/usercontroller?"+value,
     async:true,
     contentType: "application/json; charset=utf-8",
     success: function(json) {
     	if(json =="SUCCESS"){
     		  window.location="StudentHome.html";
     	}
     	else{
     		//alert("User not found");
     		$("#lblDisplayMsg").text(json);//"User not found in System. Kindly register."
     	}
     },
    //If there was no response from the server
    error: function(jqXHR, textStatus, errorThrown){
         console.log("Something really bad happened " + textStatus);
          $("#lblDisplayMsg").text(textStatus);
    }  
});
}

function mySubmitFunctionForm2(){
	 value = $('#frm2').serialize();
	 $.ajax({
		 	type: "POST",
		     url: "../com.ssdi.studentbudgetcenterserver/rest/usercontroller?"+value,
		     async:true,
		     contentType: "application/json; charset=utf-8",
		     success: function(json) {
		     	if(json =="SUCCESS"){
		     		  window.location="StudentHome.html";
		     	}
		     	else{
		     		//alert("User not found");
		     		$("#lblDisplayMsg1").text(json);//"User not found in System. Kindly register."
		     	}
		     },
		    //If there was no response from the server
		    error: function(jqXHR, textStatus, errorThrown){
		         console.log("Something really bad happened " + textStatus);
		          $("#lblDisplayMsg1").text(textStatus);
		    }  
		});
}