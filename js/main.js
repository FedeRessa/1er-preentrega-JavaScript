// Generar un número aleatorio entre 1 y 100
const numeroSecreto = Math.floor(Math.random() * 100) + 1;
let intentos = 0;
let intentoActual;

while (intentoActual !== numeroSecreto) {
    // Pedir al jugador que adivine el número
    intentoActual = parseInt(prompt("Adivina el número entre 1 y 100:"));
    
    if (isNaN(intentoActual)) {
        alert("Por favor ingresa un número válido.");
    } else {
        intentos++;
        if (intentoActual < numeroSecreto) {
            alert("¡Más alto!");
        } else if (intentoActual > numeroSecreto) {
            alert("¡Más bajo!");
        } else {
            alert(`¡Felicitaciones! ¡Adivinaste el número en ${intentos} intentos!`);
        }
    }
}
