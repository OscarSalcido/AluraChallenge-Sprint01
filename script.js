function encriptar()
{
	const texto = document.getElementById("textoIngresado").value.toLowerCase(); //cualquier caracter en Mayus, para a Minus.
	//img = (i)toma letras mayus y minus (m)toma multiples lineas (g)toma toda la linea u oración
	//caracteres a reemplazar
	var textoEncrip = texto.replace(/e/img, "enter");
	var textoEncrip = textoEncrip.replace(/i/img, "imes");
	var textoEncrip = textoEncrip.replace(/a/img, "ai");
	var textoEncrip = textoEncrip.replace(/o/img, "ober");
	var textoEncrip = textoEncrip.replace(/u/img, "ufat");

	document.getElementById("textoModificado").innerHTML = textoEncrip;
	document.getElementById('textArea2').style.display = 'block';
	document.getElementById('WarningSelec').style.display = 'none';



}
function desencriptar()
{
	var texto = document.getElementById("textoIngresado").value.toLowerCase(); //cualquier caracter en Mayus, para a Minus.
	//img = (i)toma letras mayus y minus (m)toma multiples lineas (g)toma toda la linea u oración
	//caracteres a reemplazar
	var textoEncrip = texto.replace(/enter/img, "e");
	var textoEncrip = textoEncrip.replace(/imes/img, "i");
	var textoEncrip = textoEncrip.replace(/ai/img, "a");
	var textoEncrip = textoEncrip.replace(/ober/img, "o");
	var textoEncrip = textoEncrip.replace(/ufat/img, "u");

	document.getElementById("textoModificado").innerHTML = textoEncrip;
	document.getElementById('textArea2').style.display = 'block';
	document.getElementById('WarningSelec').style.display = 'none';
}

function copiar()
{
	var contenido = document.querySelector("#textoModificado");
	contenido.select();
	document.execCommand("copy");
}