function agregarAmigo() {
    const inputAmigo = document.getElementById("amigo");
    const nombreAmigo = inputAmigo.value.trim();

    if (nombreAmigo !== "") {
        
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = nombreAmigo;
        document.getElementById("listaAmigos").appendChild(nuevoAmigo);

        // Vaciar el input después de añadir el nombre
        inputAmigo.value = "";
        inputAmigo.focus();
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
}




function sortearAmigo() {
    // Obtener todos los amigos de la lista
    const lista = document.getElementById("listaAmigos");
    const amigos = lista.getElementsByTagName("li");

    if (amigos.length === 0) {
        alert("No hay amigos en la lista para sortear.");
        return;
    }

    
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    /*Obtener el nombre del amigo sorteado*/
    const amigoSorteado = amigos[indiceAleatorio].textContent;

    /*Mostrar el resultado en la lista de resultados*/
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}
