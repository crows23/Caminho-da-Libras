// var botaoCentralizar = document.getElementById("botaoCentralizarTela");
// var p1 = document.getElementById("pino1");
// var tabuleiro = document.getElementById("tabuleiro");
var espacoBotoes = document.getElementById("espacoBotoesOpcao");
// var divBotoesOpcao = espacoBotoes.querySelectorAll("div");
var botaoZoom = espacoBotoes.querySelector("input");
// var zoomOne = document.getElementsByClassName("zoomPic")[0];
// var zoomOneBGSize = window.getComputedStyle(zoomOne).getPropertyValue("background-size");

// var setas = document.getElementById("mostradorDirecaoMoverImagem").querySelectorAll("div");

// botaoZoom.onclick = function() {
// 	if (this.value == "Zoom") {
// 		if (!zoomOne.classList.contains("zoom")) {
// 			zoomOne.classList.add("zoom");
// 			p1.classList.add("zoom");
// 			this.value = "Zoom out";
// 			this.style.fontSize = "14px";

// 			for (var i = 0; i < divBotoesOpcao.length; i++) {
// 				divBotoesOpcao[i].style.height = "33px";
// 			}

// 			espacoBotoes.style.height = "33px";
// 			espacoBotoes.style.marginTop = "735px";
// 		}

// 		botaoCentralizar.style.display = "block";

// 		for (var i = 0; i < setas.length; i++) {
// 			setas[i].style.display = "block";
// 			setas[i].style.opacity = "0";
// 		}

// 		var intervalo = window.setInterval(function() {
// 			if (setas[0].style.display == "block") {
// 				setas[0].style.opacity = "1";
// 				setas[1].style.opacity = "1";
// 				setas[2].style.opacity = "1";
// 				setas[3].style.opacity = "1";

// 				setas[0].style.transition = "opacity 0.5s ease";
// 				setas[1].style.transition = "opacity 0.5s ease";
// 				setas[2].style.transition = "opacity 0.5s ease";
// 				setas[3].style.transition = "opacity 0.5s ease";
// 			}
// 		}, 501);

// 		window.setTimeout(function() {
// 			if (setas[0].style.display == "block") {
// 				setas[0].style.opacity = "0";

// 				setas[1].style.opacity = "0";

// 				setas[2].style.opacity = "0";

// 				setas[3].style.opacity = "0";

// 				setas[0].style.transition = "opacity 0.5s ease";
// 				setas[1].style.transition = "opacity 0.5s ease";
// 				setas[2].style.transition = "opacity 0.5s ease";
// 				setas[3].style.transition = "opacity 0.5s ease";
// 			}
// 		}, 3000);

// 		window.setTimeout(function() {
// 			if (setas[0].style.display == "block") {
// 				window.clearInterval(intervalo);
// 			}
// 		}, 3001);

// 		movimentarTabuleiro(tabuleiro, botaoCentralizar);
// 	}
// 	else if (this.value == "Zoom out") {
// 		zoomOne.classList.remove('zoom');
// 		zoomOne.style.backgroundSize = zoomOneBGSize;
// 		this.value = "Zoom";
// 		this.style.fontSize = "16px";

// 		for (var i = 0; i < divBotoesOpcao.length; i++) {
// 			divBotoesOpcao[i].style.height = "53px";
// 		}
		
// 		espacoBotoes.style.height = "53px";
// 		espacoBotoes.style.marginTop = "715px";

// 		for (var i = 0; i < setas.length; i++) {
// 			setas[i].style.display = "none";
// 		}

// 		botaoCentralizar.style.display = "none";
// 		tabuleiro.style.backgroundPositionX = "50%";
// 		tabuleiro.style.backgroundPositionY = "50%";

// 		tabuleiro.onmouseover = null;
// 		tabuleiro.onmousedown = null;
// 		tabuleiro.onmouseup = null;
// 		botaoCentralizar.onclick = null;
		
// 	}
// }

// botaoZoom.onmouseover = function() {
// 	botaoZoom.style.cursor = "pointer";
// }

// botaoZoom.onmouseout = function() {
// 	botaoZoom.style.cursor = "default";
// 

$(document).ready(function() {
	$("#botaoZoom input").click(function() {
		if ($(this).attr("value") == "Zoom") {
			$("#tabuleiro").animate({"zoom" : 2}, 400);
			$(this).val("Zoom out");
			$(this).css("font-size", "14px");

			$("#tabuleiro").draggable();
			// movimentarTabuleiro($("#tabuleiro"), $("#botaoCentralizar input"));
		}
		else {
			$("#tabuleiro").animate({"zoom" : 1}, 400);
			$(this).val("Zoom");
			$(this).css("font-size", "16px");

			// $("#tabuleiro").draggable();
		}
	});
});