var botaoOpcoes = document.getElementById("botaoOpcoes").querySelector("input");

botaoOpcoes.onclick = function() {
	var fundoPopup = document.getElementsByClassName("fundoPopup")[0];
	var popupOpcoes = document.getElementById("popupOpcoes");
	var botaoOk = document.getElementById("botaoOkPopupOpcoes").querySelector("input");

	var inputs = document.getElementById("switchPerguntasVideo").querySelectorAll("input");

	var opcaoVideo = window.localStorage.getItem("opcaoVideo");

	if (opcaoVideo == "V") {
		inputs[1].value = "V";
		inputs[1].style.marginLeft = "58px";
		inputs[0].style.marginLeft = "18px";
	}
	else {
		inputs[1].value = "X";
		inputs[1].style.marginLeft = "5px";
		inputs[0].style.marginLeft = "74px";
	}

	fundoPopup.style.display = "block";
	popupOpcoes.style.display = "block";

	for (var i = 0; i < inputs.length; i++) {
		inputs[i].onmouseover = function() {
			this.style.cursor = "pointer";
		}

		inputs[i].onmouseout = function() {
			this.style.cursor = "default";
		}

		inputs[i].onclick = function() {
			if (window.getComputedStyle(this).marginLeft == "74px") {
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[1].style.marginLeft = "58px";
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.display = "none";
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[1].value = "V";

				window.setTimeout(function() {
					document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.marginLeft = "18px";
					document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.display = "block";
				}, 501);
			}

			else {
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[1].style.marginLeft = "5px";
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.display = "none";
				document.getElementById("switchPerguntasVideo").querySelectorAll("input")[1].value = "X";

				window.setTimeout(function() {
					document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.marginLeft = "74px";
					document.getElementById("switchPerguntasVideo").querySelectorAll("input")[0].style.display = "block";
				}, 501);
			}
		}
	}

	botaoOk.onclick = function() {
		fundoPopup.style.display = "none";
		popupOpcoes.style.display = "none";

		opcaoVideo = window.localStorage.setItem("opcaoVideo", inputs[1].value);

		this.onclick = null;
	}

	botaoOk.onmouseover = function() {
		this.style.cursor = "pointer";
		this.style.border = "4px solid #283891";
	}

	botaoOk.onmouseout = function() {
		this.style.cursor = "default";
		this.style.border = "none";
	}
}

botaoOpcoes.onmouseover = function() {
	this.valueOf().style.height = "50px";
	this.valueOf().style.marginTop = "-25px";

	this.style.border = "2px solid #283891";
	this.style.borderBottom = "none";

	this.style.cursor = "pointer";
}

botaoOpcoes.onmouseout = function() {
	this.valueOf().style.height = "33px";
	this.valueOf().style.marginTop = "0px";

	this.style.border = "none";

	this.style.cursor = "default";
}