function mudarEquipeJogandoAgora() {
	if (nEquipes == 2) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "639.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "176.2";
		marginTopAuxEquipe2 = "712.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe2 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe2 + "px";
		fila[0].style.width = widthAuxEquipe2 + "px";
		fila[0].style.height = heightAuxEquipe2 + "px";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].style.borderBottom = "none";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].querySelector("p").style.display = "none";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.backgroundColor = "#E9A93F";
		fila[1].style.borderBottom = "none";
		fila[1].querySelector("p").style.display = "block";
		fila[1].querySelector("p").style.marginTop = "-30px";

		fila[0].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[0].style.transform = "rotateY(-360deg)";

		fila[1].style.transition = "margin-left 1s ease, margin-top 1s ease, width 1s ease, height 1s ease, transform 1s";
		fila[1].style.transform = "rotate(-360deg)";

		window.setTimeout(function() {
			fila[0].style.marginTop = "712.9px";
			fila[0].style.marginLeft = "176.2px";

			fila[0].style.transition = "transform 0s";
			fila[0].style.transform = "rotate(0deg)";

			fila[1].style.transition = "transform 0s";
			fila[1].style.transform = "rotate(0deg)";

			var indiceFilaAux = fila[0];
			fila[0] = fila[1]
			fila[1] = indiceFilaAux;

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 2) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
		}, 1001);
	}

	else if (nEquipes == 3) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "639.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "176.2";
		marginTopAuxEquipe2 = "712.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "246.2";
		marginTopAuxEquipe3 = "712.9";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe3 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe3 + "px";
		fila[0].style.width = widthAuxEquipe3 + "px";
		fila[0].style.height = heightAuxEquipe3 + "px";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].style.borderBottom = "none";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].querySelector("p").style.display = "none";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.backgroundColor = "#E9A93F";
		fila[1].style.borderBottom = "none";
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
			fila[0].style.marginTop = "712.9px";
			fila[0].style.marginLeft = "246.2px";

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

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 3) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
			
		}, 1001);
	}

	else if (nEquipes == 4) {
		marginLeftAuxEquipe1 = "20";
		marginTopAuxEquipe1 = "639.9";
		widthAuxEquipe1 = "132.194";
		heightAuxEquipe1 = "114";

		marginLeftAuxEquipe2 = "176.2";
		marginTopAuxEquipe2 = "712.9";
		widthAuxEquipe2 = "64.097";
		heightAuxEquipe2 = "49";

		marginLeftAuxEquipe3 = "248.2";
		marginTopAuxEquipe3 = "712.9";
		widthAuxEquipe3 = "64.097";
		heightAuxEquipe3 = "49";

		marginLeftAuxEquipe4 = "320.2";
		marginTopAuxEquipe4 = "712.9";
		widthAuxEquipe4 = "64.097";
		heightAuxEquipe4 = "49";

		fila[0].style.marginLeft =  marginLeftAuxEquipe4 + "px";
		fila[0].style.marginTop = marginTopAuxEquipe4 + "px";
		fila[0].style.width = widthAuxEquipe4 + "px";
		fila[0].style.height = heightAuxEquipe4 + "px";
		fila[0].style.backgroundColor = "#f3efe2";
		fila[0].style.border = "2px solid #f3efe2";
		fila[0].style.borderBottom = "none";
		fila[0].querySelector("p").style.display = "none";

		fila[1].style.marginLeft = marginLeftAuxEquipe1 + "px";
		fila[1].style.marginTop = marginTopAuxEquipe1 + "px";
		fila[1].style.width = widthAuxEquipe1 + "px";
		fila[1].style.height = heightAuxEquipe1 + "px";
		fila[1].style.border = "10px solid #f3efe2";
		fila[1].style.backgroundColor = "#E9A93F";
		fila[1].style.borderBottom = "none";
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
			fila[0].style.marginTop = "712.9px";
			fila[0].style.marginLeft = "320.2px";

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

			equipeJogandoAgora = window.localStorage.getItem("equipeJogandoAgora");

			if (equipeJogandoAgora >= 4) {
				window.localStorage.setItem("equipeJogandoAgora", 1);
			}
			else {
				window.localStorage.setItem("equipeJogandoAgora", parseInt(equipeJogandoAgora) + 1);
			}
		}, 1001);
	}
}



