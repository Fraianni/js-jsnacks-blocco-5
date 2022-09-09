console.log("snack-1")
/*
 * Creare un array di oggetti di squadre di calcio. 
 * Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
 * Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
 * Generare numeri random al posto degli 0 nelle proprietà:
 * punti fatti e falli subiti
*/

const squads = [
    {
        nome: "Napoli",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Juventus",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Milan",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Roma",
        punti: 0,
        falli: 0,
    },
    {
        nome: "Genoa",
        punti: 0,
        falli: 0,
    }
]



squads.forEach((key, index) => {
    key.falli = Math.floor(Math.random() * 100);
    key.punti = Math.floor(Math.random() * 100);
})


console.log(squads)