const botonBiblia = document.getElementById('botonBiblia');
const entrada = document.getElementById('entradaSentimiento');
const resultado = document.getElementById('resultadoVersiculo');
const imagenBiblia = document.getElementById('imagenBiblia');

const versiculos = {
  tristeza: "Salmos 34:18 - El Señor está cerca de los quebrantados de corazón.",
  soledad: "Juan 14:18 - No los dejaré huérfanos; vendré a ustedes.",
  miedo: "Isaías 41:10 - No temas, porque yo estoy contigo.",
  alegria: "Filipenses 4:4 - Alégrense siempre en el Señor.",
  ansiedad: "Filipenses 4:6 - No se inquieten por nada, más bien oren por todo."
};

botonBiblia.addEventListener('click', () => {
    const sentimiento = entrada.value.toLowerCase();
    
    // Cambiar la imagen a la Biblia abierta
    imagenBiblia.src = "imagenes/762.jpg";
  
    // Buscar versículo
    let respuesta = "No se encontró un versículo para ese sentimiento.";
    for (const clave in versiculos) {
      if (sentimiento.includes(clave)) {
        respuesta = versiculos[clave];
        break;
      }
    }
  
    resultado.textContent = respuesta;
  });