var main = document.getElementById("container");
var tela_principal = document.getElementById("tela_principal");
var container_bottom = document.getElementById("fechar_container_bottom");

var mainWidth = main.clientWidth;
var mainHeight = main.clientHeight;

var tela_principalWidth = tela_principal.clientWidth;
var tela_principalHeight = tela_principal.clientHeight;

var margin_left = (mainWidth - tela_principalWidth)/2;
var margin_top = (mainHeight - tela_principalHeight)/2;

tela_principal.style.marginLeft = margin_left + "px";
tela_principal.style.marginTop = margin_top + "px";

container_bottom.style.marginTop = (margin_top + 768) + "px";
container_bottom.style.marginLeft = margin_left + "px";