var btVoltar = document.getElementById("botaoVoltar").querySelector("input");

btVoltar.onclick = function() {
	window.location = "../index.html";
	localStorage.clear();
}

btVoltar.onmouseover = function() {
	btVoltar.style.cursor = "pointer";
}

btVoltar.onmouseout = function() {
	btVoltar.style.cursor = "default";
}