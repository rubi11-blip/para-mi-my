
const botonCarta = document.getElementById("abrirCarta");

const mensajeCarta = document.getElementById("mensajeCarta");

botonCarta.addEventListener("click", function() {

    mensajeCarta.hidden = !mensajeCarta.hidden;

    if (mensajeCarta.hidden) {
        botonCarta.textContent = "Abrir mi cartita 💗";
    } else {
        botonCarta.textContent = "Cerrar mi cartita 💗";
    }

});
