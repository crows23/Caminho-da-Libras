var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");

var figuresCadastroEquipe = [];
var quantidadeFiguresMostrados = 0;

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		figuresCadastroEquipe.push(figures[i]);
	}
}

for (var i = 0; i < figuresCadastroEquipe.length; i++) {
	if (window.localStorage.getItem("equipe" + (i+1)) != null) {
		figuresCadastroEquipe[i].style.display = window.localStorage.getItem("equipe" + (i+1));
		labels[i].style.display = window.localStorage.getItem("equipe" + (i+1));
	}
}

for (var i = 0; i < figuresCadastroEquipe.length; i++) {
	if (window.localStorage.getItem("id" + (i+1)) == (i+1)) {
		figuresCadastroEquipe[i].querySelector("img").src = window.localStorage.getItem("imgEquipe" + (i+1));
		labels[i].innerText = window.localStorage.getItem("nomeEquipe" + (i+1));
	}	
}

for (var i = 0; i < figuresCadastroEquipe.length; i++) {
	if (window.getComputedStyle(figuresCadastroEquipe[i]).display == "block") {
		quantidadeFiguresMostrados++;
	}
}

switch(quantidadeFiguresMostrados) {
	case 2:
		figuresCadastroEquipe[0].style.display = "block";
		figuresCadastroEquipe[0].style.marginLeft = "302px";
		labels[0].style.marginLeft = "302px";

		figuresCadastroEquipe[1].style.marginLeft = "302px";
		labels[1].style.marginLeft = "302px";

		figures[4].style.marginTop = "97.5px";
		labels[4].style.marginTop = "115.5px";

		figures[5].style.display = "none";
		labels[5].style.display = "none";
		break;

	case 3:
		figuresCadastroEquipe[0].style.marginLeft = "173px";
		labels[0].style.marginLeft = "173px";

		figuresCadastroEquipe[1].style.marginLeft = "173px";
		labels[1].style.marginLeft = "173px";

		figuresCadastroEquipe[2].style.marginTop = "163px";
		labels[2].style.marginTop = "290px";
		break;

	case 4:
		figures[4].style.display = "none";
		labels[4].style.display = "none";

		figures[5].style.marginTop = "97.5px";
		labels[5].style.marginTop = "115.5px";
		break;
}