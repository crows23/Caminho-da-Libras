// Cria um contador de inputs com atributo class
var botaoPontos = document.getElementById("botaoPontos").querySelector("input");

botaoPontos.onclick = function() {
	// Pega a div com id "fundo" e a coloca na variavel fundo
	var fundo = document.getElementById("fundoPopup");
	var popupPontos = document.getElementById("popupPontos");
	var botaoOk = document.getElementById("botaoOk").querySelector("input");

	var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
	var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
	var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
	var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

	var nEquipes = window.localStorage.getItem("nEquipes");
	var nomeEquipes = document.getElementById("nomeEquipes").querySelectorAll("p");

	if (nEquipes == 2) {
		nomeEquipes[0].innerText = "1 - " + primeiraEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[1].innerText = "2 - " + segundaEquipeJogandoAgora.querySelector("p").innerText;
	}

	else if (nEquipes == 3) {
		nomeEquipes[0].innerText = "1 - " + primeiraEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[1].innerText = "2 - " + segundaEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[2].innerText = "3 - " + terceiraEquipeJogandoAgora.querySelector("p").innerText;
	}

	else if (nEquipes == 4) {
		nomeEquipes[0].innerText = "1 - " + primeiraEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[1].innerText = "2 - " + segundaEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[2].innerText = "3 - " + terceiraEquipeJogandoAgora.querySelector("p").innerText;
		nomeEquipes[3].innerText = "4 - " + quartaEquipeJogandoAgora.querySelector("p").innerText;
	}

	fundo.style.display = "block";
	popupPontos.style.display = "block";

	botaoOk.onclick = function() {
		fundo.style.display = "none";
		popupPontos.style.display = "none";
	}

	botaoOk.onmouseover = function() {
		botaoOk.style.cursor = "pointer";
	}

	botaoOk.onmouseout = function() {
		botaoOk.style.cursor = "default";
	}
}

botaoPontos.onmouseover = function() {
	botaoPontos.style.cursor = "pointer";
}

botaoPontos.onmouseout = function() {
	botaoPontos.style.cursor = "default";
}