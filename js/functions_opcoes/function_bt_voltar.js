var nEquipes = window.localStorage.getItem("nEquipes");
var btVoltar = document.getElementById("botaoVoltar").querySelector("input");
var iconeBotaoVoltar = document.getElementById("iconeBotaoVoltar");

btVoltar.onclick = function() {
	voltarCadastroEquipes();
}

iconeBotaoVoltar.onclick = function() {
	voltarCadastroEquipes();
}

btVoltar.onmouseover = function() {
	this.style.cursor = "pointer";
	this.style.border = "4px solid #283891";
	this.style.borderRight = "none";

	iconeBotaoVoltar.style.border = "4px solid #283891";
	iconeBotaoVoltar.style.width = "172px";
	iconeBotaoVoltar.style.height = "82px";
}

btVoltar.onmouseout = function() {
	this.style.cursor = "default";
	this.style.border = "none";

	iconeBotaoVoltar.style.border = "none";
	iconeBotaoVoltar.style.width = "180px";
	iconeBotaoVoltar.style.height = "90px";
}

iconeBotaoVoltar.onmouseover = function() {
	this.style.border = "4px solid #283891";
	this.style.width = "172px";
	this.style.height = "82px";
	this.style.cursor = "pointer";

	btVoltar.style.border = "4px solid #283891";
	btVoltar.style.borderRight = "none";
}

iconeBotaoVoltar.onmouseout = function() {
	this.style.border = "none";
	this.style.width = "180px";
	this.style.height = "90px";
	this.style.cursor = "default";
	
	btVoltar.style.border = "none";	
}

function voltarCadastroEquipes() {
	for (var i = 0; i < parseInt(nEquipes); i++) {
		window.localStorage.setItem("caminhoImagemOrdenado" + (i+1), null);
		window.localStorage.setItem("nomeEquipeOrdenado" + (i+1), null);
	}

	window.location = "adicionar_informacoes_equipe.html";
}