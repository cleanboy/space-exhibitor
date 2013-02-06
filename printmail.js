//$(document).ready(function() {
	
	var itinerary = new Array();

	function printpreview(){
		
		//
		$(".checkboxes").each(function(){
			if($(this).attr('checked')){
				// last bit of the string below doesnt push the description :(
				itinerary.push("<tr><td>Booth #" + $(this).attr('value') + "</td><td>" + $(this).attr('name') + "</td><td>" + $(this).attr('bio') + "</td></tr>");
			}
		}); 
		
		var arayString = itinerary.toString();
		var noCommas = arayString.replace(/,/g, '');
		
		var printContent = "<table align='center'><tr><td colspan='3' align='center'><h3>Your personalised Itinerary:</h3></td></tr>" + noCommas + "<tr><td></table>"
		
		$('body').prepend("<div id='printme' style='display:none'>" + printContent + "</div>");
		
		w=window.open();
		w.document.write($('#printme').html());
		w.print();
		w.close();
		//location.reload();
		
		itinerary = [];
		
		
	}
	
	function printpage(){
		window.print();
	}
	
	function backOne(){
		
	}
	

	function echoArray(){
		
	}

/* TO DO!!!!!!
 * 
 * So did a bit of cross browser on this..
 * firefox and opera dont like the buttons after the document.write but my guess is this is because these functions should exist after document.write? I think chrome just magically carries them over...
 * Internet explorer 9 doesnt even do the document.write altho 8 and 7 do but again, dont like the buttons afterwards
 * I think I should probably just not do document.write
 * do the thing where you create a div and then keep it hidden but only print out that section
 * 
 * ---
 * 
 * Also figure out how to get the booth description added to the freeking array!
 */