$(document).ready(function(){

	$( "#convertForm" ).submit(function( event ) {
	 
	  // Stop form from submitting normally
	  event.preventDefault();
	 
	  // Get some values from elements on the page:

	  var $form = $( this );
	  var jasonData = $form.find( "#jasonData" ).val();
	    console.log("this is your data: ", typeof(jasonData))

	    $.ajax({
		  type: "POST",
		  url: "/",
		  contentType: "application/json",
          dataType: "json",
          data: jasonData,
		  success: function(result){
		  	console.log("result success: ",result)
		  	$( "#csvFile" ).empty().append( result )
		  },
		  error: function(result) {console.log("result err: ", result)}
		});
	});
});





