function calculo() {
	var altura;
	var peso;
	var resultado;
	var img;
	altura = parseFloat(document.getElementById('altura').value);
	peso = parseFloat(document.getElementById('peso').value);
	resultado = peso/(altura * altura);
	document.getElementById('result').innerHTML = resultado;
	if (resultado <18.5) {
	document.getElementById('foto').src='lib/Figura3.png';
	}

	if (resultado >18.5 && resultado <24.9) {
	document.getElementById('foto').src='lib/Figura4.png';
	}
	if (resultado >=25) {
	document.getElementById('foto').src='lib/Figura5.png';
	}





}
function limpar() {
	
	document.getElementById('altura').value = "";
	document.getElementById('peso').value = "";
	document.getElementById('result').innerHTML = "";
	document.getElementById('foto').src='lib/tabela.png';
	
}

	


