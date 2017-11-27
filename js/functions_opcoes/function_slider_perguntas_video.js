var inputs = document.getElementById("switchPerguntasVideo").querySelectorAll("input");

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