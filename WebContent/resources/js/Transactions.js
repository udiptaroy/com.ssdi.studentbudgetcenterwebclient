function mySubmitFunctiontran(){
	value = $('#frm3').serialize();
	    $.ajax({
    	
 	type: "POST",
 	  url: "../com.ssdi.studentbudgetcenterserver/rest/usercontroller?"+value,
     async:true,
 	  contentType: "application/json; charset=utf-8",
      //if received a response from the server
     success: function(data) {
     	if(data =="SUCCESS"){
     		location.reload();
     				//$("#lblDisplayMsg").text("Data saved successfully");
     	}
     	else{
     		$("#lblDisplayMsg").text(""+data);
     	}
     	
          
     }
    });
}
