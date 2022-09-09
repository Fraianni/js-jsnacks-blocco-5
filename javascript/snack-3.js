console.log("snack-3")
/* 
 * Crea 10 oggetti che rappresentano una zucchina.
 * Dividi in due array separati le zucchine che misurano meno o più di 15cm.
 * Infine stampa separatamente quanto pesano i due gruppi di zucchine.
 */

const zucchine = [
    {
        peso: 20,
        misura: 15
    },
    {
        peso: 10,
        misura: 5
    },
    {
        peso: 67,
        misura: 20
    },
    {
        peso: 90,
        misura: 8
    },
    {
        peso: 38,
        misura: 23
    },
    {
        peso: 16,
        misura: 10
    },
    {
        peso: 58,
        misura: 29
    },
    {
        peso: 28,
        misura: 27
    },
    {
        peso: 70,
        misura: 4
    },
    {
        peso: 28,
        misura: 19
    },
]

// Dividi in due array separati le zucchine che misurano meno o più di 15cm.
let corte = [];
let lunghe = [];
let pesoLunghe = 0;
let pesoCorte = 0;

zucchine.forEach((key, index) => {
    if (key.misura >= 15) {
        lunghe.push(key)
        pesoLunghe += key.peso;
    }
    else{
        corte.push(key);
        pesoCorte+= key.peso;}
})
// Infine stampa separatamente quanto pesano i due gruppi di zucchine.
console.log("Peso corte: "+ pesoCorte,"Peso lunghe: "+ pesoLunghe)





