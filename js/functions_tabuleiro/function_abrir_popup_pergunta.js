var videos = ["../videos/01.mp4", "../videos/02.mp4", "../videos/03.mp4"];
    oldVideos = [];
function abrirPopupPergunta(dificuldade, equipeJogandoAgora) {

	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
	var fundoPopup2 = document.getElementsByClassName("fundoPopup")[1];

	var popupPergunta = document.getElementById("popupPergunta");

	var informacaoPergunta = document.getElementById("containerInformacoesPergunta").querySelectorAll("h1");
	var nomeEquipe = document.getElementById("popupPergunta").querySelector("h3");

	var botaoPassarVez = document.getElementById("botaoPassouAVez").querySelector("input");
	var botaoErrou = document.getElementById("botaoErrou").querySelector("input");
	var botaoAcertou = document.getElementById("botaoAcertou").querySelector("input");

	var opcaoVideo = window.localStorage.getItem("opcaoVideo");

	var dificuldadePergunta = ["Fácil", "Médio", "Difícil", "Muito Difícil", "Desafio"];

	var modoPergunta;
	var textoPergunta;
	var conteudoPergunta;
	var quantidadePontos;
	var quantidadeCasas;
	
	

	if (opcaoVideo == "V") {
    	var vid = document.getElementById("myVideo");
	    var index = Math.floor(Math.random() * (videos.length));
        thisVideo = videos[index];
		vid.src = thisVideo;
		vid.load();
        oldVideos.push(thisVideo);
        videos.splice(index, 1);
		document.getElementById("containerPergunta").querySelectorAll("div")[1].style.display = "none";
		modoPergunta = document.getElementById("containerPergunta").querySelectorAll("div")[0];
	}
	else {
		document.getElementById("containerPergunta").querySelectorAll("div")[0].style.display = "none";
		modoPergunta = document.getElementById("containerPergunta").querySelectorAll("div")[1];
		textoPergunta = document.getElementById("textoPergunta").querySelector("input");
		conteudoPergunta = document.getElementById("textoPergunta").querySelector("p");
	}

	for (var i = 0; i < dificuldadePergunta.length; i++) {
		if (dificuldade == dificuldadePergunta[i]) {
			if (i < 2) {
				quantidadePontos = ((i+1) * 10);
				quantidadeCasas = (i+1);
			}
			else if (i == 2) {
				quantidadePontos = 30;
				quantidadeCasas = 3;
			}
			else if (i == 3) {
				quantidadePontos = 40;
				quantidadeCasas = 3;
			}
			else {
				quantidadePontos = 60;
				quantidadeCasas = 3;
			}
		}
	}

	modoPergunta.style.display = "block";
	fundoPopup.style.display = "block";
	popupPergunta.style.display = "block";

	informacaoPergunta[1].innerText = dificuldade;
	informacaoPergunta[3].innerText = quantidadePontos;
	nomeEquipe.innerText = "Pergunta para a " + window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora);

	if (textoPergunta != null) {
		textoPergunta.oninput = function() {
			conteudoPergunta.innerText = this.value;
		}
	}

	botaoPassarVez.onclick = function() {
		var popupPassarVez = document.getElementById("popupPassarAVez");

		var botaoSim = document.getElementById("botaoSimPopupPassarVez").querySelector("input");
		var botaoNao = document.getElementById("botaoNaoPopupPassarVez").querySelector("input");

		popupPassarVez.style.display = "block";
		fundoPopup2.style.display = "block";

		botaoSim.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			mudarEquipeJogandoAgora();
		}

		botaoNao.onclick = function () {
			popupPassarVez.style.display = "none";
			fundoPopup2.style.display = "none";
		}

		botaoSim.onmouseover = function () {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
		}

		botaoNao.onmouseover = function () {
			this.style.cursor = "pointer";
			this.style.backgroundColor = "#283891";
			this.style.color = "#F3EBE0";
		}

		botaoSim.onmouseout = function () {
			this.style.cursor = "default";
			this.style.border = "none";
		}

		botaoNao.onmouseout = function () {
			this.style.cursor = "default";
			this.style.backgroundColor = "#F3EBE0";
			this.style.color = "#283891";
		}
	}

	botaoErrou.onclick = function() {
		var popupRespostaErrada = document.getElementById("popupRespostaErrada");
		var botaoOkErrou = document.getElementById("botaoOkErrou").querySelector("input");

		var conteudoResposta = document.getElementById("textoPopupRespostaErrada").querySelectorAll("p");

		popupRespostaErrada.style.display = "block";
		fundoPopup2.style.display = "block";

		conteudoResposta[0].innerText = window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora) + " errou .-.";
		conteudoResposta[1].innerText = "Volte " + quantidadeCasas + " casa(s) .-.";
		conteudoResposta[2].innerText = "Total de pontos perdidos: " + quantidadePontos;

		botaoOkErrou.onclick = function() {
			popupRespostaErrada.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			if (informacoesEquipes[equipeJogandoAgora-1][1] - quantidadeCasas >= 0) {
				informacoesEquipes[equipeJogandoAgora-1][1] = informacoesEquipes[equipeJogandoAgora-1][1] - quantidadeCasas;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][1] = 0;
			}

			if (informacoesEquipes[equipeJogandoAgora-1][2] - quantidadePontos >= 0) {
				informacoesEquipes[equipeJogandoAgora-1][2] = informacoesEquipes[equipeJogandoAgora-1][2] - quantidadePontos;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][2] = 0;
			}

			moverPinoTras(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
		}

		botaoOkErrou.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
		}

		botaoOkErrou.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "none";
		}
	}

	botaoAcertou.onclick = function() {
		var popupRespostaCorreta = document.getElementById("popupRespostaCorreta");
		var botaoOkAcertou = document.getElementById("botaoOkAcertou").querySelector("input");

		var conteudoResposta = document.getElementById("textoPopupRespostaCorreta").querySelectorAll("p");

		popupRespostaCorreta.style.display = "block";
		fundoPopup2.style.display = "block";

		conteudoResposta[0].innerText = window.localStorage.getItem("nomeEquipeOrdenado" + equipeJogandoAgora) + " acertou!";
		conteudoResposta[1].innerText = "Avance " + quantidadeCasas + " casa(s)";
		conteudoResposta[2].innerText = "Total de pontos adquiridos: " + quantidadePontos;

		botaoOkAcertou.onclick = function() {
			popupRespostaCorreta.style.display = "none";
			fundoPopup2.style.display = "none";

			fundoPopup.style.display = "none";
			popupPergunta.style.display = "none";

			if (textoPergunta != null) {
				conteudoPergunta.innerText = "";
				textoPergunta.value = "";
			}

			if (informacoesEquipes[equipeJogandoAgora-1][1] + quantidadeCasas <= 25) {
				informacoesEquipes[equipeJogandoAgora-1][1] = informacoesEquipes[equipeJogandoAgora-1][1] + quantidadeCasas;
			}
			else {
				informacoesEquipes[equipeJogandoAgora-1][1] = 25;
			}

			informacoesEquipes[equipeJogandoAgora-1][2] = parseInt(informacoesEquipes[equipeJogandoAgora-1][2]) + quantidadePontos;
			
			moverPinoFrente(quantidadeCasas, equipeJogandoAgora);
			mudarEquipeJogandoAgora();
		}

		botaoOkAcertou.onmouseover = function() {
			this.style.cursor = "pointer";
			this.style.border = "4px solid #283891";
		}

		botaoOkAcertou.onmouseout = function() {
			this.style.cursor = "default";
			this.style.border = "none";
		}
	}

	botaoPassarVez.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
	}

	botaoErrou.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
	}

	botaoAcertou.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
	}

	botaoPassarVez.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "none";
	}

	botaoErrou.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "none";
	}

	botaoAcertou.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "none";
	}
}