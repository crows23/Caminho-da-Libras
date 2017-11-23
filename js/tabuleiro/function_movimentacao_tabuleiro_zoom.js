function movimentarTabuleiro(tabuleiro, botaoCentralizar) {
	var mouseXClicado = 0;
	var mouseYClicado = 0;

	var mouseXSolto = 0;
	var mouseYSolto = 0;

	var centerX = -1037;
	var centerY = -336;

	tabuleiro.onmousedown = function() {
		mouseXClicado = event.clientX;
		mouseYClicado = event.clientY;
	}

	tabuleiro.onmouseup = function() {
		mouseXSolto = event.clientX;
		mouseYSolto = event.clientY;

		var moverX = mouseXClicado - mouseXSolto;
		var moverY = mouseYClicado - mouseYSolto;

		centerX = (-moverX) + (centerX);
		centerY = (-moverY) + (centerY);

		if (centerX >= 0) {
			centerX = 0;
		}
		else if (centerX <= -2732) {
			centerX = -2732;
		}

		if (centerY >= 0) {
			centerY = 0;
		}
		else if (centerY <= -1536) {
			centerY = -1536;
		}

		tabuleiro.style.backgroundPositionX = centerX + "px";
		tabuleiro.style.backgroundPositionY = centerY + "px";

		tabuleiro.style.cursor = "-webkit-grab";
	}

	tabuleiro.onmouseover = function() {
		tabuleiro.style.cursor = "-webkit-grab";
	}

	tabuleiro.onmouseout = function() {
		tabuleiro.style.cursor = "default";
	}

	botaoCentralizar.onclick = function() {
		tabuleiro.style.backgroundPositionX = "50%";
		tabuleiro.style.backgroundPositionY = "50%";
	}

	botaoCentralizar.onmouseover = function() {
		botaoCentralizar.querySelector("input").style.cursor = "pointer";
	}

	botaoCentralizar.onmouseout = function() {
		botaoCentralizar.querySelector("input").style.cursor = "default";
	}
}