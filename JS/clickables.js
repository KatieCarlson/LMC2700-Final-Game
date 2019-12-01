function j1option1over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	newImgSrc.setAttribute('src', '/Images/journal1_image1.jpg');
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
}

function j1option2over() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '/Images/journal1_image2.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
}

function j1out() {
	var imgBox = document.getElementById("imageSpace");
	var newImgSrc = document.createElement("img");
	
	//Change the SRC to set the image
	newImgSrc.setAttribute('src', '/Images/journal1_original.jpg');
	
	newImgSrc.setAttribute('alt', 'ImageDescriptionHere');
	newImgSrc.style.width = '100%';
	
	imgBox.replaceChild(newImgSrc, imgBox.childNodes[1]);
}