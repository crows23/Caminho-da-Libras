window.localStorage.clear();

var btSair = document.getElementsByClassName("col-md-2")[1].querySelectorAll("li")[1];

btSair.onclick = function() {
	const electron = require('electron').remote;
	let w = electron.getCurrenteWindow();
	w.close();

	$("#btSair").on('click', e => {
		electron.getCurrenteWindow().close();
	});
}