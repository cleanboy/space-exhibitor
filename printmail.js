var itinerary = new Array();

function getInfo(){
	$(".checkboxes").each(function(){
		//get relevant information and push to array
		if($(this).attr('checked')){
			itinerary.push("<tr><td valign='top'>Booth #" + $(this).attr('value') + "</td><td valign='top'>" + $(this).attr('name') + "</td><td>" + $(this).attr('bio') + "</td></tr>");
		}
	}); 
	
	var arayString = itinerary.toString();
	//get rid of commas that are created as a result of the array being converted to a string
	var noCommas = arayString.replace(/,/g, '');
	
	var printContent = "<table align='center'><tr><td colspan='3' align='center'><h3>Your personalised Itinerary:</h3></td></tr>" + noCommas + "</table>"
	return printContent;
}

function printpreview(){
	var printContent = getInfo();
	
	//create hidden div within the current document with content ready for print
	$('body').prepend("<div id='printme' style='display:none'>" + printContent + "</div>");
	
	//open new window or tab (depending on browser) and open print dialog then close after print or cancel
	w=window.open();
	w.document.write($('#printme').html());
	w.print();
	w.close();
	
	//reset array if user wants to change itinerary before print
	itinerary = [];
}
	
function emailMe(){
	var emailContent = getInfo();
	var eAddress = $('#emailme').val();
	var emailDetails = '"mailto:' + eAddress + '?subject=Your Space Expo Itinerary&body=' + emailContent + '"';
	
	//matt.jonat@smartershows.com
	console.log(emailDetails);
	alert('stop');
	//parent.location="mailto:you@youremail.com?subject=The subject you want to appear";
}
	
	function backOne(){
		
	}
	

	function echoArray(){
		
	}