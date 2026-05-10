import _ from "underscore";

/**
 * Esta funcion crea un nuevo deck
 * @param {Array<String>} tiposDeCarta Ejemplo: ['C', 'D', 'H', 'S']
 * @param {Array<String>} tiposEspeciales Ejemplo: ['A', 'J', 'Q', 'K']
 * @returns {Array<String>} retorna un deck revuelto de cartas
 */
export const crearDeck = (tiposDeCarta, tiposEspeciales) => {
    if (!tiposDeCarta || tiposDeCarta.length === 0) throw new Error("Tipos de Carta es obligatorio como un arreglo de strings");
    if (!tiposEspeciales || tiposEspeciales.length === 0) throw new Error("Tipos Especiales es obligatorio como un arreglo de strings");

    let deck = [];
    for (let index = 2; index <= 10; index++) {
        for (let tipo of tiposDeCarta) {
            deck.push(index + tipo);
        }
    }
    for (let tipo of tiposDeCarta) {
        for (let esp of tiposEspeciales) {
            deck.push(esp + tipo);
        }
    }
    return _.shuffle(deck);
}