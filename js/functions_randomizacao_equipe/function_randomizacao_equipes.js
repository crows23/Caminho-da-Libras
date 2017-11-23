// Pega o nEquipes guardado na ultima tela
var nEquipes = window.localStorage.getItem("nEquipes");
// Cria um vetor chamado "ordem"
var ordem = [];
// Cria um vetor chamado "nomeEquipes"
var nomeEquipes = [];
// Cria um vetor chamado "imgEquipes"
var imgEquipes = [];

// Cria um laço para sortear as posições em que as equipes
// jogarão. (Para a equipe 1 nem sempre ser a primeira a jogar)
while (ordem.length < nEquipes) {
	// Randomiza um número entre 1 e o nEquipes cadastradas na
	// variavel
	var indice = getRandomInt(0, nEquipes);

	// Verifica se o vetor ordem tem tamanho diferente de 0
	if (ordem.length != 0) {
		// Caso seja verdadeira a condição, cria uma variavel "igual"
		// e atribui o valor "falso" para ela
		var igual = false;
		// Cria um laço para verificar se o numero sorteado já existe no vetor
		// "ordem", a fim de evitar que sejam alocados números repetidos
		for (var i = 0; i < ordem.length; i++) {
			if (ordem[i] == indice) {
				// Caso seja atendida a condição
				// a variavel igual receber o valor "true" e
				// o laço é interrompido
				igual = true;
				break;
			}
		}
		// Caso a variavel "igual" continue com o valor "false"
		// presume-se que o numero sorteado não encontra-se no vetor
		if (igual == false) {
			// O valor sorteado é adicionado no final do vetor
			ordem.push(indice);
		}
	}
	// Caso o tamanho do vetor seja 0
	else {
		// Adiciona o numero sorteado no vetor
		ordem.push(indice);
	}
}

// Depois de todos os numeros sorteados serem colocados no vetor "ordem"
// Cria um laço para pegar os nomes das equipes e o caminho das imagens
// para serem mostrados na tela de "Ordem das Equipes" e na tela do "Jogo"
for (var i = 0; i < nEquipes; i++) {
	// Pega o nome da equipe armazenado, com base na ordem que os numeros
	// foram alocados no vetor "ordem".
	var nomeEquipe = window.localStorage.getItem("nomeEquipe"+(ordem[i]));
	// Pega o caminho da imagem da equipe armazenado, com base na ordem que os numeros
	// foram alocados no vetor "ordem".
	var imgEquipe = window.localStorage.getItem("caminhoImagemEquipe"+(ordem[i]));
	// Pega o numero da equipe armazenado, com base na ordem que os numeros

	// Aloca o nome da equipe no vetor "nomeEquipes"
	nomeEquipes[i] = nomeEquipe;
	// Aloca o caminho da imagem da equipe no vetor "imgEquipes"
	imgEquipes[i] = imgEquipe;
}

// Pega os elementos "figures" filhos de "espacoInformacoes" e os coloca no vetor "figures"
var figures = document.getElementById("espaco_informacoes").querySelectorAll("figure");
// Pega os elementos "divs" com atributos "class" com valor
// "nomeEquipes" filhos de "espacoInformacoes" e os coloca no vetor "divs"
var divs = document.getElementById("espaco_informacoes").getElementsByClassName("col-md-7");

// Verifica a quantidade de equipes cadastradas
// e desativa a visualização das divs que não forem
// usadas
if (nEquipes == 2) {
	figures[2].style.display = "none";
	divs[2].style.display = "none";
	figures[3].style.display = "none";
	divs[3].style.display = "none";
}
else if (nEquipes == 3) {
	figures[3].style.display = "none";
	divs[3].style.display = "none";
}

// Percorre o vetor figures a fim de mostrar as imagens das equipes cadastradas
// na ordem sorteada lá em cima
for (var i = 0; i < nEquipes; i++) {
	figures[i].querySelector("img").src = imgEquipes[i];
	figures[i].querySelector("img").style.width = "100%";
	figures[i].querySelector("img").style.height = "100%";
	divs[i].getElementsByClassName("nomeEquipe").item("innerText").innerText = nomeEquipes[i];
}

for (var i = 0; i < nEquipes; i++) {
	window.localStorage.setItem("caminhoImagemOrdenado" + (i+1), figures[i].querySelector("img").getAttribute("src"));
	window.localStorage.setItem("nomeEquipeOrdenado" + (i+1), divs[i].getElementsByClassName("nomeEquipe").item("innerText").innerText);
}

// Função para randomizar valores
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min) + 1) + min;
}