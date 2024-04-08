function inject(elemName, url){
	var elem = document.getElementById(elemName);
	injectNode(elem, url);
}

function injectNode(node, url){
	var elem = node;
	makeIdle(elem);

	var xmlHttp = getXmlHttpRequest();
	xmlHttp.open("get", url, true);

	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState == 4){
			elem.innerHTML = xmlHttp.responseText;
		}
	}

	xmlHttp.send(null);
}

function injectImage(elemName, imgName){
	var elem = document.getElementById(elemName);
	makeIdle(elem);

	elem.innerHTML = '<img src="' + imgName + '" />';
}

function getXmlHttpRequest(){
	var xmlHttp;
	try{
		// Firefox, Opera 8.0+, Safari
		xmlHttp = new XMLHttpRequest();
	}catch(e){
		// Internet Explorer
		try{
			xmlHttp = new ActiveXObject("Msxml2.XMLHTTP");
		}catch(e){
			try{
				xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
			}catch(e){
				alert("Your browser does not support AJAX!");
				return false;
			}
		}
	}

	return xmlHttp;
}

function makeIdle(elem){
	elem.innerHTML = 'loading...'
}