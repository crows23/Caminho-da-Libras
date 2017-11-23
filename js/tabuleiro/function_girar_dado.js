var init = function() {
    var box = document.querySelector(".container").children[0];
    var panelClassName = 'mostrar-frente';
    var classes = ['mostrar-frente', 'mostrar-costa', 'mostrar-direito', 'mostrar-esquerda', 'mostrar-cima', 'mostrar-baixo']

    box.onclick = function() {
        var intervalo = window.setInterval(function() {
            var mostrador = getRandomInt(0, 5);

            panelClassName = classes[mostrador];
            box.removeAttribute("class");
            box.setAttribute("class", panelClassName);
        }, 201);

        window.setTimeout(function() {
            clearInterval(intervalo);
        }, 2000);

        window.setTimeout(function() {
            var mostrador = Math.round(Math.random()*99);

            if (mostrador <= 39) {
                panelClassName = classes[0];
            }
            else if (mostrador <= 59) {
                panelClassName = classes[1];
            }
            else if (mostrador <= 79) {
                panelClassName = classes[2];
            }
            else if (mostrador <= 89) {
                panelClassName = classes[3];
            }
            else if (mostrador <= 95) {
                panelClassName = classes[4];
            }
            else if (mostrador <= 99) {
                panelClassName = classes[5];
            }

            box.removeAttribute("class");
            box.setAttribute("class", panelClassName);
        }, 2001);

        // box.onclick = null;
    }

    box.onmouseover = function() {
        box.style.cursor = "pointer";
        box.setAttribute("title", "Clique para girar o dado");
    }

    box.onmouseout = function() {
      box.style.cursor = "default";
      box.removeAttribute("title");
    }
}

window.addEventListener('DOMContentLoaded', init, false);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}