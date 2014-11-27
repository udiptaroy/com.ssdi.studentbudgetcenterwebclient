$(document).ready(function(){ 
	$("#lblDisplayMsg").text("");
	$.getJSON( "DecisionFunctions?requestName=getCreateApps", function(result) {
		
		var textToInsert = '';
		 
        for (var i = 0; i < result.length; i++) {
        	textToInsert  += '<tr><td id="aid">' + result[i].A_id + '</td>';
        	textToInsert  += '<td>' + result[i].username + '</td>';
        	textToInsert  += '<td>' + result[i]. programName + '</td>';
        	textToInsert  += '<td>' + result[i]. degTitle + '</td>';
        	textToInsert  += '<td>' + result[i]. term + '</td>';
        	textToInsert  += '<td>' + result[i]. year + '</td>';
        	textToInsert  += '<td><select id="dec'+i+'" class="myclass"><option value="N/A">N/A</option><option value="A">Accept</option><option value="D">Decline</option><option value="R">Review</option></select></td></tr>';
      }
        $("#dectl").append(textToInsert);	
	});
	$.getJSON( "DecisionFunctions?requestName=getCreateApps1", function(result) {
		
		var textToInsert = '';
		 
        for (var i = 0; i < result.length; i++) {
        	textToInsert  += '<tr><td id="aid">' + result[i].A_id + '</td>';
        	textToInsert  += '<td>' + result[i].username + '</td>';
        	textToInsert  += '<td>' + result[i]. programName + '</td>';
        	textToInsert  += '<td>' + result[i]. degTitle + '</td>';
        	textToInsert  += '<td>' + result[i]. term + '</td>';
        	textToInsert  += '<td>' + result[i]. year + '</td>';
        	textToInsert  += '<td>' + result[i]. status + '</td>';
      }
        $("#pentl").append(textToInsert);	
	});            
       
     });



function mySubmitFunctiondectl(){
	
	var fullValue = new Array();
	$("tr").each(function(){ 
		var $tds = $(this).find('td');
		var value = new Array();
		$($tds).each(function(){ 
			var isFormParent = $( this ).children("select").is( ".myclass" );
			if(isFormParent == true){
				var idValue = $( this ).children("select").attr('id');
			      value.push($( "#"+idValue+" :selected" ).val());
			}else{
			      value.push($(this).text());
			};
		});
		fullValue.push(value);
   	});
	
    $.ajax({
 	type: "POST",
     url: "DecisionFunctions",
     data: {fullValue:fullValue},
     dataType: "json",
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
