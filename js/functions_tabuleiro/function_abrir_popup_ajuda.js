var botaoAjuda = document.getElementById("botaoAjuda");

botaoAjuda.querySelector("input").onclick = function() {
	alert("Popup de ajuda ainda em desenvolvimento");
}

botaoAjuda.querySelector("input").onmouseover = function() {
	botaoAjuda.style.marginTop = "0px";
	this.style.border = "2px solid #283891";
	this.style.borderBottom = "none";
	this.style.cursor = "pointer";
}

botaoAjuda.querySelector("input").onmouseout = function() {
	botaoAjuda.style.marginTop = "20px";
	this.style.border = "2px solid #f3efe2";
	this.style.borderBottom = "none";
	this.style.cursor = "default";
}