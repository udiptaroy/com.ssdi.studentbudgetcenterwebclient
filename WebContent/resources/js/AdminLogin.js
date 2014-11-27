function mySubmitFunctionForm5(){
	 value = $('#frm5').serialize();
     $.ajax({
  	type: "POST",
      url: "LoginFunctions",
      data: value,
      dataType: "json",
      //if received a response from the server
      success: function(data) {
      	if(data =="true"){
      		  window.location="http://localhost:8080/StudentRecruitmentSystem/Decision.html";
      	}
      	else{
      		//alert("User not found");
      		$("#lblDisplayMsg1").text("Error in login");
      	}
      	
           
      }
     });
}