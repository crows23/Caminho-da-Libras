// var campoOculto = document.getElementById("hoverMenu").querySelectorAll("li");
// var btsMenu = document.getElementById("botoesMenu").querySelectorAll("li");
// var nomesBtsMenu = [];

window.localStorage.clear();

// for (var i = 0; i < btsMenu.length; i++) {
// 	nomesBtsMenu.push(btsMenu[i].getAttribute("name"));
// }

// for (var i = 0; i < btsMenu.length; i++) {
// 	if (btsMenu[i].getAttribute("name") == nomesBtsMenu[i]) {
// 		btsMenu[i].onmouseover = function() {
// 			this.style.backgroundColor = "#555";
// 			this.style.color = "#fff";
// 			this.style.border = "0.1px solid #f00";
// 			this.style.cursor = "pointer";

// 			if (this.valueOf().getAttribute("name") == nomesBtsMenu[0]) {
// 				campoOculto[0].style.display = "block";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[1]) {
// 				campoOculto[1].style.display = "block";
// 				campoOculto[1].style.marginLeft = "693px";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[2]) {
// 				campoOculto[2].style.display = "block";
// 				campoOculto[2].style.marginTop = "130px";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[3]) {
// 				campoOculto[3].style.display = "block";
// 				campoOculto[3].style.marginTop = "130px";
// 				campoOculto[3].style.marginLeft = "693px";
// 			}
// 		}

// 		btsMenu[i].onmouseout = function() {
// 			this.style.backgroundColor = "#bbb";
// 			this.style.color = "#000";
// 			this.style.border = "none";
// 			this.style.cursor = "default";
			
// 			if (this.valueOf().getAttribute("name") == nomesBtsMenu[0]) {
// 				campoOculto[0].style.display = "none";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[1]) {
// 				campoOculto[1].style.display = "none";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[2]) {
// 				campoOculto[2].style.display = "none";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[3]) {
// 				campoOculto[3].style.display = "none";
// 			}
// 		}

// 		btsMenu[i].onclick = function() {
// 			if (this.valueOf().getAttribute("name") == nomesBtsMenu[0]) {
// 				window.location = "html/adicionar_informacoes_equipe.html";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[1]) {
// 				window.location = "html/regras.html";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[2]) {
// 				window.location = "html/sobre.html";
// 			}

// 			else if (this.valueOf().getAttribute("name") == nomesBtsMenu[3]) {
// 				alert("Bye bye");
// 			}
// 		}
// 	}
// }