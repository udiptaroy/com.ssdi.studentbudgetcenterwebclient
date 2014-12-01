$(document).ready(function(){ 
	
	$("#lblDisplayMsg").text("");
	
	$.getJSON( "../com.ssdi.studentbudgetcenterserver/rest/usercontroller?methodName=getUserData", function(data) {
		if(data != null){
			$("#username").val(data.username);
			$("#password").val(data.password);
			$("#email").val(data.email);
			$("#bankaccount").val(data.bankaccount);
		}else{
			$("#lblDisplayMsg1").text("error in fetching details");
		}
	});
	            
  });

function mySubmitFunctionForm4(){
	 value = $('#frm4').serialize();
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