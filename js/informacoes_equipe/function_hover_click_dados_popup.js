var figuresPopup = document.getElementById("containerInformacoesEquipe").querySelectorAll("figure");

for (var i = 0; i < figuresPopup.length; i++) {
	if (figuresPopup[i].id == "icone" + (i+1)) {
		figuresPopup[i].onmouseover = function() {
			this.style.width = "14.3%";
			this.style.height = "98%";
			this.style.border = "2px solid #f00";
			this.style.cursor = "pointer";
		}

		figuresPopup[i].onmouseout = function() {
			this.style.width = "14.915%";
			this.style.height = "100%";
			this.style.border = "none";
			this.style.cursor = "default";
		}

		figuresPopup[i].onclick = function() {
			for (var i = 0; i < figuresPopup.length; i++) {
				if (figuresPopup[i].querySelector("img").style.border == "2px solid rgb(255, 0, 0)") {
					figuresPopup[i].querySelector("img").style.width = "100%";
					figuresPopup[i].querySelector("img").style.height = "100%";
					figuresPopup[i].querySelector("img").style.border = "none";
					break;
				}
			}

			for (var i = 0; i < figuresPopup.length; i++) {
				if (document.getElementById("nome_equipe").querySelector("input").value == "" ||
					document.getElementById("nome_equipe").querySelector("input").value == 
					"Equipe " + figuresPopup[i].querySelector("img").getAttribute("alt")) {

					document.getElementById("nome_equipe").querySelector("input").value = "Equipe " + 
					this.querySelector("img").getAttribute("alt");
				}
			}
			this.querySelector("img").style.width = "98%";
			this.querySelector("img").style.height = "96%";
			this.querySelector("img").style.border = "2px solid #f00";
		}
	}
}