function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== "") {
        // Crear un nuevo elemento de lista para el amigo
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombreAmigo;

        // Agregar el nuevo amigo a la lista
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);

        // Vaciar el input después de añadir el nombre
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}
