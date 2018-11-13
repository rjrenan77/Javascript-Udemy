// var artista = "Muse";

// let artistaBar = {
//     artista: "SOAD"
// }

// let artistaShow = {
//     artista: "Linkin Park"
// }

// function tocar(){
//     console.log(`Estamos tocando ${this.artista}`);
// }

// //usando o this e bind para trocar os contextos
// let tocaGeral = tocar;
// tocaGeral();

// let tocaBar = tocar.bind(artistaBar);
// tocaBar();

var artista = 'The Beatles'

function tocar () {
    console.log(`Estamos tocando ${this.artista}!`)
}

let bar = {
    artista: 'Dire Straits',
    tocar: function () {
        console.log(`Vamos tocar ${this.artista}!`)
    }
}

let show = {
    artista: 'Blind Guardian',
    tocar: function () {
        console.log(`Vamos tocar ${this.artista}`)
    }
}

tocar()
bar.tocar()