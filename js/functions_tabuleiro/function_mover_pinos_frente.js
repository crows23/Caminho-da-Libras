function moverPinoFrente(quantidadeCasas, equipeJogandoAgora) {
	var indiceFigureAtual = (equipeJogandoAgora-1);
	var indiceDivAtual;

	for (var i = 0; i < divs.length; i++) {
		var figureMarginLeftSplit = figures[indiceFigureAtual].style.marginLeft.split("px");
		var figureMarginTopSplit = figures[indiceFigureAtual].style.marginTop.split("px");

		var divMarginLeftSplit = window.getComputedStyle(divs[i]).marginLeft.split("px");
		var divMarginTopSplit = window.getComputedStyle(divs[i]).marginTop.split("px");

		if (nEquipes == 2) {
			if (i != 0 && i != (divs.length - 1)) {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 47) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 46)) {

					indiceDivAtual = i;
					break;
				}
			}

			else {
				if (parseInt(figureMarginLeftSplit[0]) == parseInt(divMarginLeftSplit[0]) && 
					parseInt(figureMarginTopSplit[0]) == parseInt(divMarginTopSplit[0])
					||
					parseInt(figureMarginLeftSplit[0]) == (parseInt(divMarginLeftSplit[0]) + 62) && 
					parseInt(figureMarginTopSplit[0]) == (parseInt(divMarginTopSplit[0]) + 51)) {

					indiceDivAtual = i;
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

					indiceDivAtual = i;
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

					indiceDivAtual = i;
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
					
					indiceDivAtual = i;
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
					
					indiceDivAtual = i;

					getIndice = true;
					
					break;
				}
			}
		}
	}

	if (nEquipes == 2) {
		var divMarginLeftSplit;
		var divMarginTopSplit;

		if (indiceDivAtual >= 0 && indiceDivAtual < (divs.length - 2)) {
			if ((indiceDivAtual+quantidadeCasas) > 25) {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
				}

				figures[indiceFigureAtual].style.width = "4.5%";
				figures[indiceFigureAtual].style.height = "8%";
			}
			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginTop.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
					figures[1].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
				}

				figures[indiceFigureAtual].style.width = "3.4%";
				figures[indiceFigureAtual].style.height = "7%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

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
			if ((indiceDivAtual+quantidadeCasas) > 25) {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

					figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 31) + "px";
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
				}

				figures[indiceFigureAtual].style.width = "4.5%";
				figures[indiceFigureAtual].style.height = "8%";
			}

			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginLeft.split("px");
					divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginTop.split("px");

					figures[2].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 24) + "px";
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
				}

				figures[indiceFigureAtual].style.width = "3.4%";
				figures[indiceFigureAtual].style.height = "7%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
				divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

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
			if ((indiceDivAtual+quantidadeCasas) > 25) {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					var divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					var divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";

					figures[2].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
				}

				else if (indiceFigureAtual == 3) {
					var divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
					var divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

					figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
					figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
				}

				figures[indiceFigureAtual].style.width = "4.5%";
				figures[indiceFigureAtual].style.height = "8%";
			}
			else {
				if (indiceFigureAtual == 0) {
					figures[0].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginLeft;
					figures[0].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 1) {
					var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginLeft.split("px");

					figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
					figures[1].style.marginTop = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginTop;
				}

				else if (indiceFigureAtual == 2) {
					var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginTop.split("px");
					figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";

					figures[2].style.marginLeft = window.getComputedStyle(divs[(indiceDivAtual+quantidadeCasas)]).marginLeft;
				}

				else if (indiceFigureAtual == 3) {
					var divMarginLeftSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginLeft.split("px");
					var divMarginTopSplit = window.getComputedStyle(divs[indiceDivAtual+quantidadeCasas]).marginTop.split("px");

					figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 47) + "px";
					figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 46) + "px";
				}

				figures[indiceFigureAtual].style.width = "3.4%";
				figures[indiceFigureAtual].style.height = "7%";
			}

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
		else {
			if (indiceFigureAtual == 0) {
				figures[0].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
				figures[0].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
			}

			else if (indiceFigureAtual == 1) {
				var divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");

				figures[1].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[1].style.marginTop = window.getComputedStyle(divs[25]).marginTop;
			}

			else if (indiceFigureAtual == 2) {
				var divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");
				figures[2].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";

				figures[2].style.marginLeft = window.getComputedStyle(divs[25]).marginLeft;
			}

			else if (indiceFigureAtual == 3) {
				var divMarginLeftSplit = window.getComputedStyle(divs[25]).marginLeft.split("px");
				var divMarginTopSplit = window.getComputedStyle(divs[25]).marginTop.split("px");

				figures[3].style.marginLeft = (parseInt(divMarginLeftSplit[0]) + 62) + "px";
				figures[3].style.marginTop = (parseInt(divMarginTopSplit[0]) + 51) + "px";
			}

			figures[indiceFigureAtual].style.width = "4.5%";
			figures[indiceFigureAtual].style.height = "8%";

			figures[indiceFigureAtual].style.transition = "width 0.5s ease, height 0.5s ease, margin-left 0.5s ease, margin-top 0.5s ease";
		}
	}
}