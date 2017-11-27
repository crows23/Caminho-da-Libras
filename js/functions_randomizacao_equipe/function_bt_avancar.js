var btProximo = document.getElementById("botaoProximo").querySelector("input");
var iconeBotaoAvancar = document.getElementById("iconeBotaoProximo");

btProximo.onclick = function() {
	prosseguirTabuleiro();
}

iconeBotaoAvancar.onclick = function() {
	prosseguirTabuleiro();
}

btProximo.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.borderLeft = "none";

	iconeBotaoAvancar.style.border = "4px solid #283891";
	iconeBotaoAvancar.style.width = "172px";
	iconeBotaoAvancar.style.height = "82px";
}

btProximo.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "none";

	iconeBotaoAvancar.style.border = "none";
	iconeBotaoAvancar.style.width = "180px";
	iconeBotaoAvancar.style.height = "90px";
}

iconeBotaoAvancar.onmouseover = function() {
	this.style.border = "4px solid #283891";
	this.style.width = "172px";
	this.style.height = "82px";
	this.style.cursor = "pointer";

	btProximo.style.border = "4px solid #283891";
	btProximo.style.borderLeft = "none";
}

iconeBotaoAvancar.onmouseout = function() {
	this.style.border = "none";
	this.style.width = "180px";
	this.style.height = "90px";
	this.style.cursor = "default";
	
	btProximo.style.border = "none";	
}

function prosseguirTabuleiro() {
	window.location = "tabuleiro.html"
}