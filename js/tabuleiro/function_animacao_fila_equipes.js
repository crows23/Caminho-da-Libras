var nEquipes = window.localStorage.getItem("nEquipes");

var botaoSair = document.getElementById("botaoSair").querySelector("input");

var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

var fila = [];

if (nEquipes == 2) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.style.display = "none";
	quartaEquipeJogandoAgora.style.display = "none";

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora]
}

else if (nEquipes == 3) {
	primeiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado1");
	primeiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado1");

	segundaEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado2");
	segundaEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado2");

	terceiraEquipeJogandoAgora.querySelector("img").src = window.localStorage.getItem("caminhoImagemOrdenado3");
	terceiraEquipeJogandoAgora.querySelector("p").innerText = window.localStorage.getItem("nomeEquipeOrdenado3");

	quartaEquipeJogandoAgora.style.display = "none";

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora]
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

	fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora, quartaEquipeJogandoAgora]
}

botaoSair.onclick = function() {
	if (nEquipes == 2) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "649.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "156.2";
		marginTopAuxEquipe2 = "714.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[0].style.width = widthAuxEquipe2 + "px";
		fila[0].style.height = heightAuxEquipe2 + "px";	
		fila[0].querySelector("p").style.display = "none";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].querySelector("p").style.display = "block";
		fila[1].querySelector("p").style.marginTop = "-30px";

		fila[0].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[1].style.transform = "rotate(-360deg)";

		window.setTimeout(function() {
			// fila[0].style.marginTop = "696px";
			// fila[0].style.marginLeft = "292.2px";

			fila[0].style.marginTop = "714.9px";
			fila[0].style.marginLeft = "156.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1]
			fila[1] = indiceFilaAux;
			
		}, 1001);
	}

	else if (nEquipes == 3) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "649.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "156.2";
		marginTopAuxEquipe2 = "714.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "224.2";
		marginTopAuxEquipe3 = "714.9";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe3 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe3 + "px";
		fila[0].style.width = widthAuxEquipe3 + "px";
		fila[0].style.height = heightAuxEquipe3 + "px";
		fila[0].querySelector("p").style.display = "none";
		// fila[0].querySelector("p").style.lineHeight = "49px";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].querySelector("p").style.display = "block";
		fila[1].querySelector("p").style.marginTop = "-30px";

		fila[2].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[2].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[2].style.width = widthAuxEquipe2 + "px";
		fila[2].style.height = heightAuxEquipe2 + "px";

		fila[0].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[1].style.transform = "rotate(-360deg)";

		fila[2].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[2].style.transform = "rotate(-360deg)";

		window.setTimeout(function() {
			// fila[0].style.marginTop = "696px";
			// fila[0].style.marginLeft = "292.2px";

			fila[0].style.marginTop = "714.9px";
			fila[0].style.marginLeft = "224.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";

			fila[2].style.transition = "transform 0s";
			fila[2].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1]
			fila[1] = fila[2]
			fila[2] = indiceFilaAux;
			
		}, 1001);
	}

	else if (nEquipes == 4) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "649.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "156.2";
		marginTopAuxEquipe2 = "714.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "224.2";
		marginTopAuxEquipe3 = "714.9";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		marginLeftAuxEquipe4 = "292.2";
		marginTopAuxEquipe4 = "714.9";
		widthAuxEquipe4 = "64.097";
		heightAuxEquipe4 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe4 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe4 + "px";
		fila[0].style.width = widthAuxEquipe4 + "px";
		fila[0].style.height = heightAuxEquipe4 + "px";
		fila[0].querySelector("p").style.display = "none";
		// fila[0].querySelector("p").style.lineHeight = "49px";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].querySelector("p").style.display = "block";
		fila[1].querySelector("p").style.marginTop = "-30px";

		fila[2].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[2].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[2].style.width = widthAuxEquipe2 + "px";
		fila[2].style.height = heightAuxEquipe2 + "px";

		fila[3].style.marginLeft = marginLeftAuxEquipe3 + "px";
		fila[3].style.marginTop = marginTopAuxEquipe3 + "px";
		fila[3].style.width = widthAuxEquipe3 + "px";
		fila[3].style.height = heightAuxEquipe3 + "px";

		fila[0].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[1].style.transform = "rotate(-360deg)";

		fila[2].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[2].style.transform = "rotate(-360deg)";

		fila[3].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[3].style.transform = "rotate(-360deg)";

		window.setTimeout(function() {
			// fila[0].style.marginTop = "696px";
			// fila[0].style.marginLeft = "292.2px";

			fila[0].style.marginTop = "714.9px";
			fila[0].style.marginLeft = "292.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";

			fila[2].style.transition = "transform 0s";
			fila[2].style.transform = "rotate(0deg)";

			fila[3].style.transition = "transform 0s";
			fila[3].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1]
			fila[1] = fila[2]
			fila[2] = fila[3]
			fila[3] = indiceFilaAux;
			
		}, 1001);
	}
}

botaoSair.onmouseover = function() {
	botaoSair.style.cursor = "pointer";
}

botaoSair.onmouseout = function() {
	botaoSair.style.cursor = "default";
}