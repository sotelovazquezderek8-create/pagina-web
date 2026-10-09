function buscar() {
  var texto = document.getElementById('buscador').value.toLowerCase().trim();
  var personas = document.getElementsByClassName('persona');
  var encontrados = 0;

  for (var i = 0; i < personas.length; i++) {
    var nombre = personas[i].innerText.toLowerCase();

    // esto quita los acentos para que si buscas "jose" te salga "José"
    nombre = nombre.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    var textoSinAcento = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    if (nombre.includes(textoSinAcento)) {
      personas[i].style.display = "";
      encontrados++;
    } else {
      personas[i].style.display = "none";
    }
  }

  // si no encuentra nada, muestra un mensaje
  var mensaje = document.getElementById('no-resultados');
  if (mensaje) {
    if (encontrados === 0) {
      mensaje.style.display = "block";
    } else {
      mensaje.style.display = "none";
    }
  }
}