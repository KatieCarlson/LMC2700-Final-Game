var j1_deciding = false;

function j1option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '../Images/journal1_image1.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j1option2over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '../Images/journal1_image2.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j1out() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '../Images/journal1_original.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j1options() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '../Images/optionBG.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	
	var options = document.getElementById("options");
	options.style.visibility = "visible";
	
	j1_deciding = true;
}

function j1option1() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Maybe she was looking at something behind me?</b>";
	
	j1out();
}

function j1option2() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b> Why'd she smile at me? Could it be....?</b>";
	
	j1out();
}

$(window).ready(function() {
		$('#magazine').turn({
							display: 'single',
							acceleration: true,
							gradients: !$.isTouch,
							elevation:50,
							when: {
								turned: function(e, page) {
									/*console.log('Current view: ', $(this).turn('view'));*/
								}
							}
						});
	});
	
	
	$(window).bind('keydown', function(e){
		
//		if (e.keyCode==37)
//			$('#magazine').turn('previous');
//		else if (e.keyCode==39)
//			$('#magazine').turn('next');
        document.getElementById('button1').onclick = function() {
                $('#magazine').turn('previous');};
        document.getElementById('button2').onclick = function() {
                $('#magazine').turn('next');};
			
	});
                    
    function flip(source){
        // Trigger the id of the element that was clicked
        if(source.id == 'button2') {
            $('#magazine').turn('next');
        } else {
            $('#magazine').turn('previous');
        }
    };