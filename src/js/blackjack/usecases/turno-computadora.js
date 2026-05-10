import { pedirCarta, acumularPuntos, crearCarta, determinarGanador } from "./";
// Turno de la Computadora
/**
 * 
 * @param {Number} puntosMinimos puntos minimos que la computadora necesita para ganar 
 * @param {Array<String>} deck 
 */
export const turnoComputadora = (puntosMinimos, deck, puntosJugadores, puntosHTML, divCartasJugadores) => {
    if (!puntosMinimos) throw new Error("Los Puntos minimos son necesarios");
    if (!deck) throw new Error("El deck es necesarios");

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);
        puntosComputadora = acumularPuntos(carta, 1, puntosJugadores, puntosHTML);
        const imgCarta = crearCarta(carta);
        divCartasJugadores[puntosJugadores.length - 1].append(imgCarta);

    } while ((puntosComputadora < puntosMinimos) && (puntosMinimos <= 21));
    determinarGanador(puntosJugadores);
}