// JavaScript Document

function showHide(ID) {
	if (document.getElementById(ID).style.display == "none") {
		document.getElementById(ID).style.display= "";
		document.getElementById(ID + "_span").innerHTML= "[-]";
	}else{
		document.getElementById(ID).style.display = "none";
		document.getElementById(ID + "_span").innerHTML= "[+]";
	}
}