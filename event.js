const div = document.querySelector("div")
const p = document.createElement("p")
const h1 = document.createElement("h1")
var dobhat = false
var szinek = []
var uhhfennvane = []
var i = 0
var mivan

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
        console.log(dobas)
        if (!uhhfennvane[i] && dobas == 6) {
            console.log("hohooo")
        }
        console.log(szinek[i])
        i++
        if (i > mivan-1 || szinek[i]=="") i = 0
    }
}

// na ez vajon miért nem működik </3

function nenezzide(jatekosok) {
    szinek.push("red")
    szinek.push("blue")
    if (jatekosok > 2) szinek.push("yellow")
    if (jatekosok == 4) szinek.push("green")
    for (let j = 0; j < jatekosok;j++) {
        uhhfennvane.push(false)
    }
}

function kezd() {
    var jatekosok = parseInt(document.querySelector("#jatekosok").value)
    nenezzide(jatekosok)
    huha()
    dobhat = true
    mivan = jatekosok
}