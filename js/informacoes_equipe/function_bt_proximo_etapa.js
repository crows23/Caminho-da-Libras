var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
var btProximo = document.getElementById("botaoProximo").querySelector("input");

var campoVazio = false;
var quantidadeFiguresDisplayBlock = 0;

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		if (window.getComputedStyle(figures[i]).display == "block") {
			quantidadeFiguresDisplayBlock++;
		}
	}
}

for (var i = 0; i < quantidadeFiguresDisplayBlock; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		if (figures[i].querySelector("img").getAttribute("src") == "" || labels[i].innerText == "Equipe " + (i+1)) {
			campoVazio = true;
			break;
		}
	}
}

if (!campoVazio) {
	btProximo.disabled = false;

	btProximo.onclick = function() {
		var informacoesEquipes = []

		for (var i = 0; i < quantidadeFiguresDisplayBlock; i++) {
			window.localStorage.setItem("caminhoImagemEquipe" + (i+1), figures[i].querySelector("img").getAttribute("src"));
			window.localStorage.setItem("nomeEquipe" + (i+1), labels[i].innerText);
		}

		window.localStorage.setItem("nEquipes", quantidadeFiguresDisplayBlock);
		window.location = "opcoes.html"
	}
	btProximo.onmouseover = function() {
		btProximo.style.cursor = "pointer";
	}

	btProximo.onmouseout = function() {
		btProximo.style.cursor = "default";
	}
}

