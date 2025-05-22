/**
 * Ajusta el nivel de dificultad de un juego en función del rendimiento acumulado.
 *
 * @param {number} totalAciertos - Total acumulado de respuestas correctas.
 * @param {number} totalPreguntas - Total acumulado de preguntas respondidas.
 * @returns {number} - Nivel de dificultad: 0 (fácil), 1 (medio), 2 (difícil).
 */
export function ajustarDificultad(totalAciertos, totalPreguntas) {
    if (totalPreguntas === 0) return 0;

    if (
        totalAciertos < 0 ||
        totalPreguntas < 0 ||
        totalAciertos > totalPreguntas
    ) {
        throw new Error("Datos inválidos: aciertos no pueden superar el total de preguntas.");
    }

    const promedio = (totalAciertos / totalPreguntas) * 100;

    if (promedio >= 80) return 2; // Difícil
    if (promedio >= 60) return 1; // Medio
    return 0; // Fácil
}