var figures = document.getElementById("containerCadastrarEquipe").querySelectorAll("figure");
var background = document.getElementById("fundoPopup");
var popup = document.getElementById("popup");

var figuresCadastroEquipe = [];
var figuresIds = [];

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == "img_equipe" + (i+1)) {
		figuresCadastroEquipe.push(figures[i]);
	}
}

for (var i = 0; i < figures.length; i++) {
	figuresIds.push(figures[i].id);
}

for (var i = 0; i < figures.length; i++) {
	if (figures[i].id == figuresIds[i]) {
		figures[i].onmouseover = function() {
			this.style.backgroundColor = "#555";
			this.style.cursor = "pointer";
			this.style.color = "#fff";
			this.style.border = "0.1px solid #f00";
		}

		figures[i].onmouseout = function() {
			this.style.backgroundColor = "#aaa";
			this.style.cursor = "default";
			this.style.color = "#000";
			this.style.border = "none";
		}

		figures[i].onclick = function() {
			for (var i = 0; i < figuresIds.length; i++) {
				if (i < 4) {
					var labels = document.getElementById("containerCadastrarEquipe").querySelectorAll("label");
					var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");
					
					if (this.valueOf().id == figuresIds[i]) {
						if (this.valueOf().querySelector("img").getAttribute("src") != "") {
							for (var j = 0; j < figuresPopup.length; j++) {
								if (this.valueOf().querySelector("img").getAttribute("src") == 
									figuresPopup[j].querySelector("img").getAttribute("src")) {
									document.getElementById("nome_equipe").querySelector("input").value = labels[i].innerText;

									figuresPopup[j].style.display = "inline-block";
									figuresPopup[j].querySelector("img").style.border = "2px solid #f00";
									figuresPopup[j].querySelector("img").style.width = "98%";
									figuresPopup[j].querySelector("img").style.height = "96%";

									window.localStorage.setItem("popupMudou", "inline-block");
									window.localStorage.setItem("idPopup", j);
									break;
								}
							}
						}
						else {
							for (var j = 0; j < figuresIds.length; j++) {
								for (var k = 0; k < figuresPopup.length; k++) {
									if (figures[j].querySelector("img").getAttribute("src") == 
										figuresPopup[k].querySelector("img").getAttribute("src")) {
										figuresPopup[k].style.display = "none";

										window.localStorage.setItem("popupMudou", "none");
										window.localStorage.setItem("idPopup", k);
										break;
									}
								}
							}
							document.getElementById("nome_equipe").querySelector("input").value = "";
						}

						organizar_numero_icones_mostrados();

						popup.querySelector("h2").innerText = "Equipe " + (i+1);
						popup.style.display = "block";
						background.style.display = "block";
					}
				}
				else if (i == 4) {
					if (this.valueOf().id == figuresIds[i]) {
						for (var j = 0; j < figuresCadastroEquipe.length; j++) {
							if (window.getComputedStyle(figuresCadastroEquipe[j]).display == "none") {
								window.localStorage.setItem("equipe" + (j+1), "block");
								break;
							}
						}
						alert ("Uma nova equipe foi adicionada para cadastro.")
						location.reload();
					}
				}
				else if (i == 5) {
					if (this.valueOf().id == figuresIds[i]) {
						for (var j = figuresCadastroEquipe.length-1; j >= 2; j--) {
							if (window.getComputedStyle(figuresCadastroEquipe[j]).display == "block") {
								window.localStorage.setItem("equipe" + (j+1), "none");
								window.localStorage.setItem("nomeEquipe" + (j+1), "");
								window.localStorage.setItem("imgEquipe" + (j+1), "");
								window.localStorage.setItem("id" + (j+1), "");
								break;
							}
						}
						alert ("A equipe " + (j+1) + " foi removida do cadastro de equipes.")
						location.reload();
					}
				}
			}
		}
	}
}