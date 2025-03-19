const div = document.querySelector("div")
const p = document.createElement("p")
const h1 = document.createElement("h1")
var dobhat = false

function random(a, f) {
    return Math.floor(Math.random()*(f-a+1))+a;
}

function huha() {
    p.innerText = "nem tudok programozni aaaa"
    div.appendChild(p)
}

// lehet hogy ugy kene hogy itt felül ^ a pbe ugy rakjuk bele hogy dictionaryvel ha van ilyen itt (megintcsak nem tudok programozni ezért nem tudok ilyeneket)
// és a szín mellé egy bool???? hogy van e a tablan mert szivem szerint nem szenvednek azzal hogy tobb legyen a tablan egy szinbol mert kicsi nagyon
// TALÁN valamit varázsolok otthon ezen a héten de az se biztos még

function dob() {
    if (dobhat) {
        dobas = random(1, 6)
        // if (nincsbabuatablanvagyvalamiilyesmi és hatos) {
        //     megy a tablara
        // } else {
        //     megy a kövire vagy tippem nincs nem tudok programozni
        // }
    }
}

function kezd() {
    huha()
    dobhat = true
}