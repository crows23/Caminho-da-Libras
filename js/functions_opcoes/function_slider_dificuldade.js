var inputs = document.getElementById("switchDificuldade").querySelectorAll("input");

for (var i = 0; i < inputs.length; i++) {
	inputs[i].onmouseover = function() {
		this.style.cursor = "pointer";
	}

	inputs[i].onmouseout = function() {
		this.style.cursor = "default";
	}

	inputs[i].onclick = function() {
		if (window.getComputedStyle(this).marginLeft == "121px" || window.getComputedStyle(this).marginLeft == "178px") {
			if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[2]).marginLeft == "121px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "110px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "3";
			}
			else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[2]).marginLeft == "178px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "162px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "4";
			}

			document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "none";

			window.setTimeout(function() {
				if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[2]).marginLeft == "121px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.marginLeft = "178px";
				}
				else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[2]).marginLeft == "178px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.marginLeft = "121px";
				}

				document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.marginLeft = "18px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.marginLeft = "68px";

				document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "block";
			}, 501);
		}

		else if (window.getComputedStyle(this).marginLeft == "18px" || window.getComputedStyle(this).marginLeft == "75px") {
			if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[0]).marginLeft == "18px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "5px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "1";
			}
			else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[0]).marginLeft == "75px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "55px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "2";
			}

			document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "none";

			window.setTimeout(function() {
				if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[0]).marginLeft == "18px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.marginLeft = "75px";
				}
				else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[0]).marginLeft == "75px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.marginLeft = "18px";
				}

				document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.marginLeft = "126px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.marginLeft = "178px";

				document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "block";
			}, 501);
		}

		else if (window.getComputedStyle(this).marginLeft == "68px" || window.getComputedStyle(this).marginLeft == "126px") {
			if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[1]).marginLeft == "68px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "55px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "2";
			}
			else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[1]).marginLeft == "126px") {
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].style.marginLeft = "110px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[3].value = "3";
			}
			document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "none";
			document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "none";

			window.setTimeout(function() {
				if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[1]).marginLeft == "68px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.marginLeft = "126px";
				}
				else if (window.getComputedStyle(document.getElementById("switchDificuldade").querySelectorAll("input")[1]).marginLeft == "126px") {
					document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.marginLeft = "68px";
				}
				document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.marginLeft = "18px";
				document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.marginLeft = "178px";

				document.getElementById("switchDificuldade").querySelectorAll("input")[0].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[1].style.display = "block";
				document.getElementById("switchDificuldade").querySelectorAll("input")[2].style.display = "block";
			}, 501);
		}
	}
}