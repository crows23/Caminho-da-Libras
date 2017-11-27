var nEquipes = window.localStorage.getItem("nEquipes");

var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

var informacoesEquipes = [];

if (nEquipes == 2) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.style.display = "none";
	quartaEquipeJogandoAgora.style.display = "none";

	informacoesEquipes = [[primeiraEquipeJogandoAgora, 0, 0], [segundaEquipeJogandoAgora, 0, 0]];
}

else if (nEquipes == 3) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado3");
	terceiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado3");

	quartaEquipeJogandoAgora.style.display = "none";

	informacoesEquipes = [[primeiraEquipeJogandoAgora, 0, 0], [segundaEquipeJogandoAgora, 0, 0], [terceiraEquipeJogandoAgora, 0, 0]];
}

else if (nEquipes == 4) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado3");
	terceiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado3");

	quartaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado4");
	quartaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado4");

	informacoesEquipes = [[primeiraEquipeJogandoAgora, 0, 0],
						  [segundaEquipeJogandoAgora, 0, 0],
						  [terceiraEquipeJogandoAgora, 0, 0],
						  [quartaEquipeJogandoAgora, 0, 0]];
}

for (var i = 0; i < informacoesEquipes.length; i++) {
	informacoesEquipes[i][0].onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.borderColor = "#283891";
	}

	informacoesEquipes[i][0].onmouseout = function() {
		this.style.cursor = "default";
		this.style.borderColor = "#f3efe2";
	}

	informacoesEquipes[i][0].onclick = function() {
		nomeEquipe = this.querySelector("p").innerText;
		imgEquipe = this.querySelector("img").getAttribute("src");

		var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
		var popupDadosEquipe = document.getElementById("popupDadosEquipe");
		var containerDadosEquipe = document.getElementById("containerDadosEquipe");

		var botaoOkDados = document.getElementById("botaoOkDados").querySelector("input");

		var casa = document.getElementById("dados").querySelectorAll("p")[5];
		var pontos = document.getElementById("dados").querySelectorAll("p")[4];

		popupDadosEquipe.style.display = "block";
		fundoPopup.style.display = "block";

		containerDadosEquipe.querySelector("figure").querySelector("img").src = imgEquipe;
		containerDadosEquipe.querySelector("#nomeEquipeDados").innerText = nomeEquipe;

		containerDadosEquipe.querySelector("figure").querySelector("img").style.width = "100%";
		containerDadosEquipe.querySelector("figure").querySelector("img").style.height = "100%";

		for (var i = 0; i < informacoesEquipes.length; i++) {
			if (this.id == informacoesEquipes[i][0].id) {
				if (informacoesEquipes[i][1] != 0 && informacoesEquipes[i][1] != 25) {
					casa.innerText = informacoesEquipes[i][1];
				}
				else if (informacoesEquipes[i][1] == 0) {
					casa.innerText = "Início";
				}
				else {
					casa.innerText = "Chegada";
				}
			}
		}

		for (var i = 0; i < informacoesEquipes.length; i++) {
			if (this.id == informacoesEquipes[i][0].id) {
				pontos.innerText = informacoesEquipes[i][2];
			}
		}

		botaoOkDados.onclick = function() {
			popupDadosEquipe.style.display = "none";
			fundoPopup.style.display = "none";
			this.onclick = null;
		}

		botaoOkDados.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
		}

		botaoOkDados.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "none";
		}
	}
}