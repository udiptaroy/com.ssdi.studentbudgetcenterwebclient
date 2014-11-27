$(document).ready(function(){ 
	$.getJSON( "ApplicationFunctions?requestName=getStatus", function(result) {
		$('#sbtl').append($("<tr>"));
	    for (var i = 0; i < result.length; i++) {
	    	$('#sbtl').append($("<td>"+result[i]+"</td>")); 
	     
	    }
	    $('#sbtl').append($("</tr>"));
	});
	            
       
     });

   