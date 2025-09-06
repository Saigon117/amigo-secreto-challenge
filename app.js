let amigos = [];

// Función para añadir amigos
function agregarAmigo() {
  const input = document.querySelector("#amigo");
  const nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, inserte un nombre.");
  } else {
    amigos.push(nombre);

    // Actualizar la lista en pantalla
    mostrarLista();

    // Limpiar el campo
    input.value = "";
  }
}

// Mostrar la lista en el UL
function mostrarLista() {
  const lista = document.querySelector("#listaAmigos");
  lista.innerHTML = ""; // limpiamos

  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}

// Función para sortear amigo
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay amigos en la lista.");
    return;
  }

  const indice = Math.floor(Math.random() * amigos.length);
  const ganador = amigos[indice];

  const resultado = document.querySelector("#resultado");
  resultado.innerHTML = `<li>🎉 El amigo secreto es: <strong>${ganador}</strong></li>`;
}
