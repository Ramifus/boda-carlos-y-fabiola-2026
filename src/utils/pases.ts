// Frases que dependen de la cantidad de pases.
// Se arman SOLO acá: el servidor y los scripts usan estas funciones,
// así el texto nunca queda distinto en dos lugares.

/** "PASE" o "PASES" según la cantidad. */
export function palabraPases(cantidad: number): string {
    return cantidad === 1 ? "Pase" : "Pases";
}

/** Mensaje final de la tarjeta según la cantidad de pases. */
export function mensajePresencia(cantidad: number): string {
    return cantidad === 1
        ? "Esperamos contar con tu presencia"
        : "Esperamos contar con su presencia";
}
