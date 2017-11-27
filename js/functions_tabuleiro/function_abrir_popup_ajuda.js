var botaoAjuda = document.getElementById("botaoAjuda").querySelector("input");

botaoAjuda.onclick = function() {
	alert("Popup de ajuda ainda em desenvolvimento");
}

botaoAjuda.onmouseover = function() {
	this.valueOf().style.height = "50px";
	this.valueOf().style.marginTop = "-25px";

	this.style.border = "2px solid #283891";
	this.style.borderBottom = "none";

	this.style.cursor = "pointer";
}

botaoAjuda.onmouseout = function() {
	this.valueOf().style.height = "33px";
	this.valueOf().style.marginTop = "0px";

	this.style.border = "none";

	this.style.cursor = "default";
}