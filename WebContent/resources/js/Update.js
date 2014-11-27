$(document).ready(function(){ 
	
	$("#lblDisplayMsg").text("");
	
	$.getJSON( "UpdateFunctions?requestName=getUserDetails", function(data) {
		if(data != null){
			$("#email").val(data.email);
			$("#name").val(data.name);
			$("#password").val(data.password);
			$("#address").val(data.address);
			$("#selectState").val(data.state);
			$("#selectCountry").val(data.country);
			$("#ssn").val(data.ssn);
		}else{
			$("#lblDisplayMsg1").text("error in fetching details");
		}
	});
	            
  });

function mySubmitFunctionForm4(){
	 value = $('#frm4').serialize();
    $.ajax({
 	type: "POST",
     url: "UpdateFunctions",
     data: value,
     dataType: "json",
     //if received a response from the server
     success: function(data) {
     	if(data =="true"){
     		$("#lblDisplayMsg").text("Details updated successfully.");
     	}
     	else{
     		//alert("User not found");
     		$("#lblDisplayMsg").text("Error in updating contact details");
     	}
     	
          
     }
    });
} 