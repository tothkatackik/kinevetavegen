const div = document.querySelector("div")
const p = document.createElement("p")
const h1 = document.createElement("h1")
var redpositions = []
var bluepositions = []
var yellowpositions = []
var greenpositions = []
var dobhat = false
var szinek = []
var i = 0
var mivan

function random(a, f) {
    return Math.floor(Math.random()*(f-a+1))+a;
}

function huha() {
    p.innerText = "nem tudok programozni aaaa"
    div.appendChild(p)
}

function lep(aaa) {

}

function felrak(szin) {
    var babuk = document.querySelectorAll(`.${szin}`)
    babuk.forEach(element => {
        element.addEventListener("click", function () {
            lep(this)
        })
    });
}

function dob() {
    if (dobhat) {
        dobas = random(1, 6)
        console.log(dobas)
        if ( dobas == 6) {
            felrak(szinek[i])
        }
        console.log(szinek[i])
        i++
        if (i > mivan-1) i = 0
    }
}

function nenezzide(jatekosok) {
    szinek.push("red")
    redpositions = [[0,0], [0,1], [1, 0], 1,1]
    szinek.push("blue")
    bluepositions = [[0, 10], [0, 11], [1, 10], [1,11]]
    if (jatekosok > 2) {
        szinek.push("yellow")
        yellowpositions = [[10, 0], [10, 1], [11, 0], [11, 1]]
    }
    if (jatekosok == 4) {
        szinek.push("green")
        greenpositions = [[10, 10], [10, 11], [11, 10], [11, 11]]
    }
}

function kezd() {
    var jatekosok = parseInt(document.querySelector("#jatekosok").value)
    nenezzide(jatekosok)
    huha()
    dobhat = true
    mivan = jatekosok
}