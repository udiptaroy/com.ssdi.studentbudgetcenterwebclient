
$(document).ready(function(){ 
	
	$("#lblDisplayMsg").text("");
	
	$.getJSON( "ApplicationFunctions?requestName=getProgramName", function(result) {
	    for (var i = 0; i < result.length; i++) {
	    $('#progOptions')
        .append($('<option>',result[i] )
        .text(result[i])); 
	     
	    }
	});
	$.getJSON( "ApplicationFunctions?requestName=getTitle", function(result) {
	    for (var i = 0; i < result.length; i++) {
	    $('#degOptions')
        .append($('<option>',result[i] )
        .text(result[i])); 
	     
	    }
	});
	
	
	/*
	       $("#frm3").submit( function()
           {
             value = $('#frm3').serialize();
               $.ajax({
            	type: "POST",
                url: "ApplicationFunctions",
                data: value,
                dataType: "json",
                //if received a response from the server
                success: function(data) {
                	window.location="http://localhost:8080/StudentRecruitmentSystem/Status.html";
                alert(data);
                         $("#msgid").html("");
                         $("#msgid").append("<b>Server data:</b> " + data + "");
                	if(data =="true")
                		  window.location="http://localhost:8080/StudentRecruitmentSystem/Status.html";
                	else{
                		alert("User not found");
                	}
                	
                     
                },
                //If there was no resonse from the server
                error: function(jqXHR, textStatus, errorThrown){
                     console.log("Something really bad happened " + textStatus);
                      $("#msgid").html(jqXHR.responseText);
                },
                
                //capture the request before it was sent to server
                beforeSend: function(jqXHR, settings){
                    settings.data += "&dummyData=whatever";
                    //disable the button until we get the response
                    $('#frm3').attr("disabled", true);
                },
                
                //this is called after the response or error functions are finsihed
                //so that we can take some action
                complete: function(jqXHR, textStatus){
                    //enable the button 
                    $('#frm3').attr("disabled", false);
                }
      
            });  
            
           }
           
        );*/
        
       
     });

function mySubmitFunctionForm3(){
	 value = $('#frm3').serialize();
     $.ajax({
  	type: "POST",
      url: "ApplicationFunctions",
      data: value,
      dataType: "json",
      //if received a response from the server
      success: function(data) {
      	if(data =="SUCCESS")
      		  window.location="http://localhost:8080/StudentRecruitmentSystem/Status.html";
      	else{
      		$("#lblDisplayMsg").text(""+data);
      	}
      	
           
      }
     });
}