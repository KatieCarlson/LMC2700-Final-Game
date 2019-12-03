var j1_deciding = false;

function j1option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '../Images/cutSceneBeg1.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j1option2over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '../Images/cutSceneBeg2.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j2option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '../Images/recognizedMeAndGreetedMe.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j2option2over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', 'Images/interestedInMyBulletJournal.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j3option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', 'Images/weOrderedSomeCoffee.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j4option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', 'Images/messageEachOther.jpg');
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
	newImgSrc.setAttribute('src', '../Images/journal1InitImg.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j2out() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '../Images/journal2InitImg.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j3out() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', 'Images/helpingHerWithItAfterClub.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	if (!j1_deciding) {
		imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
	}
}

function j4out() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', 'Images/recognizedMeAndGreetedMe.jpg');
	
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

function j2option1() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Must have really liked the journal.</b>";
	
	j2out();
}

function j2option2() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Could it be she was impressed by it...?</b>";
	
	j2out();
}

function j3option1() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Is this...a flag raising event? </b>";
	
	j3out();
}

function j3option2() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Does this mean future dates later? </b>";
	
	j3out();
}

function j4option1() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Without a doubt</b>";
	
	j4out();
}

function j4option2() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>Obviously</b>";
	
	j4out();
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