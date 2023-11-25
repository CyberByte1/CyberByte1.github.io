

// smooth scroll
document.getElementById("downloadButton1").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "/Moe_Kaadi_Resume.pdf"; // Provide the correct path to your CV file
    downloadLink.target = "_blank"; // Open in a new tab/window
    downloadLink.download = "Moe_Kaadi_Resume.pdf";

    // Trigger a click event on the link
    downloadLink.dispatchEvent(new MouseEvent('click'));

    // Remove the link from the DOM after the click event
    document.body.removeChild(downloadLink);
});
document.getElementById("downloadButton2").addEventListener("click", function() {
    var downloadLink = document.createElement("a");
    downloadLink.href = "/Moe_Kaadi_Resume.pdf"; // Provide the correct path to your CV file
    downloadLink.target = "_blank"; // Open in a new tab/window
    downloadLink.download = "Moe_Kaadi_Resume.pdf";

    // Trigger a click event on the link
    downloadLink.dispatchEvent(new MouseEvent('click'));

    // Remove the link from the DOM after the click event
    document.body.removeChild(downloadLink);
});
$(document).ready(function(){
	$(".nav-link").on('click', function(event) {

    	if (this.hash !== "") {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 700, function(){
				window.location.hash = hash;
			});
      	} 
    });
});