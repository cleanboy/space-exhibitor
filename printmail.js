//$(document).ready(function() {
	
	var itinerary = new Array();

	function printpagess(){
		
		
		var arayString = itinerary.toString();
		
		console.log(arayString);
		
		//work on this block to eliminate array items if deselected after the print button is clicked.
		if(itinerary != []){
			//var itinerary = [];
		}
	}
	
	function printpreview(){
		$(".checkboxes").each(function(){
			if($(this).attr('checked')){
				itinerary.push("<tr><td>Booth #" $(this).attr('value') + "</td><td>" + $(this).attr('name') + "</td></tr>");
			}
		}); 
		
		var arayString = itinerary.toString();
		
		//console.log(arayString);
		
		for (var i=0;i==itinerary.length;i++){
			document.write("<table><tr><td>" + itinerary[i].toString() + "</td></tr></table>");
		}
		
		//var strings = "<p>This is a paragraph of text that I am hoping will come out as a sentence when print is clicked</p><p>Here is another paragraph to see if there is any styling</p><button onclick='printpage()'>Print</button>"
		
		//document.write(strings);
		
		//window.print();
	}
	
	function printpage(){
		window.print();
	}
	

function echoArray(){
	console.log(arayString);
}
