var nEquipes = window.localStorage.getItem("nEquipes");

var botaoAjuda = document.getElementById("botaoAjuda").querySelector("input");
var botaoOpcoes = document.getElementById("botaoOpcoes").querySelector("input");

var divs = document.getElementById("casasTabuleiro").querySelectorAll("div");
var figures = document.getElementById("casasTabuleiro").querySelectorAll("figure");

var primeiraEquipeJogandoAgora = document.getElementById("primeiraEquipeJogandoAgora");
var segundaEquipeJogandoAgora = document.getElementById("segundaEquipeJogandoAgora");
var terceiraEquipeJogandoAgora = document.getElementById("terceiraEquipeJogandoAgora");
var quartaEquipeJogandoAgora = document.getElementById("quartaEquipeJogandoAgora");

var fila = [primeiraEquipeJogandoAgora, segundaEquipeJogandoAgora, terceiraEquipeJogandoAgora, quartaEquipeJogandoAgora]

for (var i = (figures.length - 1); i >= nEquipes; i--) {
	figures[i].style.display = "none";
}

for (var i = 0; i < nEquipes; i++) {
	if (figures[i].id == "") {
		figures[i].id = "pino" + (i+1);
	}
}

for (var i = 0; i < nEquipes; i++) {
	figures[i].querySelector("img").src = fila[i].querySelector("img").getAttribute("src");
}

if (nEquipes == 2) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "62px";
	figures[1].style.marginTop = "120px";
}
else if (nEquipes == 3) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "62px";
	figures[1].style.marginTop = "69px";

	figures[2].style.marginLeft = "31px";
	figures[2].style.marginTop = "120px";
}
else if (nEquipes == 4) {
	figures[0].style.marginLeft = "0px";
	figures[0].style.marginTop = "69px";

	figures[1].style.marginLeft = "62px";
	figures[1].style.marginTop = "69px";

	figures[2].style.marginLeft = "0px";
	figures[2].style.marginTop = "120px";

	figures[3].style.marginLeft = "62px";
	figures[3].style.marginTop = "120px";
}

botaoAjuda.onclick = function() {
	var indiceFigureAtual;
	var indiceDivAtual;
	var getIndice = false;

	for (var i = 0; i < divs.length; i++) {
		for (var j = 0; j < nEquipes; j++) {
			var figureMarginLeftSplit = figures[j].style.marginLeft.split("px");
			var figureMarginTopSplit = figures[j].style.marginTop.split("px");

			var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
			var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

			if (nEquipes == 2) {
				if (i != 0 && i != (divs.length - 1)) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}

				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}

			else if (nEquipes == 3) {
				if (i != 0 && i != (divs.length - 1)) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 24) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 31) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}

			else if (nEquipes == 4) {
				if (i != 0 && i != (divs.length - 1)) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {
						
						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {
						
						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}
		}

		if (getIndice == true) {
			break;
		}
	}

	if (nEquipes == 2) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 0 && indiceDivAtual < (divs.length - 2)) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
	else if (nEquipes == 3) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 0 && indiceDivAtual < (divs.length - 2)) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 24) + "px";
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 31) + "px";
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}

	else if (nEquipes == 4) {
		if (indiceDivAtual >= 0 && indiceDivAtual < (divs.length - 2)) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";

				figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
			}

			else if (indiceFigureAtual == 3) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";

				figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+1)]).marginLeft;
			}

			else if (indiceFigureAtual == 3) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginLeft.split("px");
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+1]).marginTop.split("px");

				figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
}

botaoOpcoes.onclick = function() {
	var indiceFigureAtual;
	var indiceDivAtual;
	var getIndice = false;

	for (var i = (divs.length - 1); i > 0; i--) {
		for (var j = 0; j < nEquipes; j++) {
			var figureMarginLeftSplit = figures[j].style.marginLeft.split("px");
			var figureMarginTopSplit = figures[j].style.marginTop.split("px");

			var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
			var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

			if (nEquipes == 2) {
				if (i != 25) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}

				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}

			else if (nEquipes == 3) {
				if (i != 25) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 24) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 31) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}

			else if (nEquipes == 4) {
				if (i != 25) {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {
						
						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
				else {
					if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
						||
						parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)
						||
						parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
						parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {
						
						indiceFigureAtual = j;
						indiceDivAtual = i;

						getIndice = true;
						
						break;
					}
				}
			}
		}

		if (getIndice == true) {
			break;
		}
	}

	if (nEquipes == 2) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual > 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else if (indiceDivAtual == 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
	else if (nEquipes == 3) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual > 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 24) + "px";
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else if (indiceDivAtual == 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 31) + "px";
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}

	else if (nEquipes == 4) {
		if (indiceDivAtual > 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";

				figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
			}

			else if (indiceFigureAtual == 3) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
				figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
			}

			figures[indiceFigureAtual].style.width = "3.4%";
			figures[indiceFigureAtual].style.height = "7%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else if (indiceDivAtual == 1) {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";

				figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual-1)]).marginLeft;
			}

			else if (indiceFigureAtual == 3) {
				var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginLeft.split("px");
				var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual-1]).marginTop.split("px");

				figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
}

botaoAjuda.onmouseover = function() {
	botaoAjuda.style.cursor = "pointer";
}

botaoOpcoes.onmouseover = function() {
	botaoOpcoes.style.cursor = "pointer";
}

botaoAjuda.onmouseout = function() {
	botaoAjuda.style.cursor = "default";
}

botaoOpcoes.onmouseout = function() {
	botaoAjuda.style.cursor = "default";
}