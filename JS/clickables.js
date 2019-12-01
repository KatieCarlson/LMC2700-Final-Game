var j1_deciding = false;

function j1option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '/Images/journal1_image1.jpg');
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
	newImgSrc.setAttribute('src', '/Images/journal1_image2.jpg');
	
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
	newImgSrc.setAttribute('src', '/Images/journal1_original.jpg');
	
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
	newImgSrc.setAttribute('src', '/Images/optionBG.jpg');
	
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
	
	document.getElementById("option").innerHTML = "<b>option 1</b>";
	
	j1out();
}

function j1option2() {
	j1_deciding = false;
	options.style.visibility = "hidden";
	
	document.getElementById("option").innerHTML = "<b>option 2</b>";
	
	j1out();
}