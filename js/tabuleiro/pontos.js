
var pontuacao[];
var pontos;
if(pergunta = "facil"){
	pontos=5;
}else if(pergunta = "normal"){
	pontos=7;
}else if(pergunta = "dificil"){
	pontos=9;
}else if(pergunta = "muito dificil"){
	pontos=11;
}else{
	//erro;
}

for (int i = 1; i<=4){//adaptação para numero de equipes cadastradas usando o vetor.length
	if(equipe=i){
	pontuacao[i]+=pontos;
	}
}
