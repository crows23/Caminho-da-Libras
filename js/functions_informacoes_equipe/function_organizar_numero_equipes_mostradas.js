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
		// labels[i].style.display = window.localStorage.getItem("equipe" + (i+1));
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
		figuresCadastroEquipe[0].style.marginLeft = "270px";
		// labels[0].style.marginLeft = "270px";

		figuresCadastroEquipe[1].style.marginLeft = "270px";
		figuresCadastroEquipe[1].style.marginTop = "255px";
		figuresCadastroEquipe[1].style.borderRadius = "15px 15px 100px 100px/15px 15px 30px 30px";
		figuresCadastroEquipe[1].style.lineHeight = "50px";
		// labels[1].style.marginLeft = "302px";
		break;

	case 3:
		figuresCadastroEquipe[0].style.marginLeft = "150px";

		figuresCadastroEquipe[1].style.marginTop = "65px";
		figuresCadastroEquipe[1].style.marginLeft = "375px";
		figuresCadastroEquipe[1].style.borderRadius = "100px 100px 15px 15px/30px 30px 15px 15px";
		figuresCadastroEquipe[1].style.lineHeight = "250px";
		// labels[0].style.marginLeft = "173px";

		figuresCadastroEquipe[2].style.marginLeft = "270px";
		figuresCadastroEquipe[2].style.borderRadius = "15px 15px 100px 100px/15px 15px 30px 30px";
		figuresCadastroEquipe[2].style.lineHeight = "50px";
		// labels[1].style.marginLeft = "173px";

		// figuresCadastroEquipe[2].style.marginTop = "163px";
		// labels[2].style.marginTop = "290px";
		break;
}