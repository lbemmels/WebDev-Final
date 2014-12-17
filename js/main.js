var imageCount = 1;
var total = 3;

function fox(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/fox" + imageCount + ".jpg";
}

function p1(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/p1" + imageCount + ".jpg";
}

function social(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/social" + imageCount + ".jpg";
}

function define(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/define" + imageCount + ".jpg";
}

function ddw(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/ddw" + imageCount + ".jpg";
}

function state(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/state" + imageCount + ".jpg";
}

function vinyl(x) {
	var image = document.getElementById('imgslide');
	imageCount = imageCount + x;
	if(imageCount > total){imageCount = 1;}
	if(imageCount < 1){imageCount = total;}	
	image.src = "../../img/vinyl" + imageCount + ".jpg";
}

