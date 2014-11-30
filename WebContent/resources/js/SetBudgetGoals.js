function mySubmitFunctiondectl(){
	/*var fullValue = new Array();
	$("tr").each(function(){ 
		var $tds = $(this).find('td');
		var value = new Array();
		$($tds).each(function(){
			var isFormParent = $( this ).children("input").is( ".myclass" );
			if(isFormParent == true){
				var idValue = $( this ).children("input").attr('id');
			     value.push($( "#"+idValue).val());
			}else{
			      value.push($(this).text());
			};
		});
		if(value.length >0){
		fullValue.push(value);
		}
		
   	});*/
	value = $('#frm6').serialize();
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
