var botaoSair = document.getElementById("botaoSair").querySelector("input");

botaoSair.onclick = function() {
	var popupSair = document.getElementById("popupSair");
	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];

	var botaoSim = document.getElementById("botaoSimPopupSair").querySelector("input")
	var botaoNao = document.getElementById("botaoNaoPopupSair").querySelector("input")

	botaoSim.onclick = function() {
		popupSair.style.display = "none";
		fundoPopup.style.display = "none";

		window.localStorage.clear();
		window.location = "../index.html";
	}

	botaoNao.onclick = function() {
		popupSair.style.display = "none";
		fundoPopup.style.display = "none";
	}

	botaoSim.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
	}

	botaoSim.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "none";
	}

	botaoNao.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.backgroundColor = "#283891";
		this.style.color = "#F3EBE0";
	}

	botaoNao.onmouseout = function() {
		this.style.cursor = "default";
		this.style.backgroundColor = "#F3EBE0";
		this.style.color = "#283891";
	}

	popupSair.style.display = "block";
	fundoPopup.style.display = "block";
}

botaoSair.onmouseover = function() {
	this.valueOf().style.height = "50px";

	this.style.border = "2px solid #283891";
	this.style.borderTop = "none";
	this.style.cursor = "pointer";
}

botaoSair.onmouseout = function() {
	this.valueOf().style.height = "33px";

	this.style.border = "none";
	this.style.cursor = "default";
}