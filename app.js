let amigos = [];

function agregarAmigo() {
    let nuevoAmigo = document.getElementById('amigo');
    let nombreDeAmigo = nuevoAmigo.value

// VALIDACION DE ENTRADA 
    if(nuevoAmigo.value === ""){
     alert('Por favor, inserte un nombre');
     return;
    }

    // AGREGAR NUEVO AMIGO
 amigos.push(nombreDeAmigo);
 nuevoAmigo.value = '';
 listaAmigos();

}

// FUNCION PARA MOSTRAR AMIGOS EN HTML
function listaAmigos() {
    let listaDeAmigos = document.getElementById('listaAmigos');
    listaDeAmigos.innerHTML = amigos.map(nombreDeAmigo => 
        `<li>${nombreDeAmigo}</li>`).join('');
    
}
 

 // SORTEAR AMIGO SECRETO
function sortearAmigo() {
        if(amigos.length < 3) {
        alert('Necesitas mas amigos para poder jugar');
        return;
    }

 // MUESTRA AMIGO SORTEADO
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById('resultado'); 
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;

    let limpiarLista = document.getElementById("listaDeAmigos");
    limpiarLista.innerHTML
    amigos = []; 
    mostrarAmigos(); 
}
function limpiarPantalla() {
    amigos = []; // Vaciar el array de amigos
    document.getElementById("listaAmigos").innerHTML = "";
    document.getElementById("resultado").innerHTML = ""; 
    document.getElementById("amigo").value = ""; 
    alert("¡Comenzar juego! Puedes agregar nuevos nombres.")
}
