const div = document.querySelector("div")
const p = document.createElement("p")
const h1 = document.createElement("h1")
var dobhat = false
var szinek = []
var i = 0
var mivan
var palya

function random(a, f) {
    return Math.floor(Math.random()*(f-a+1))+a;
}

function huha() {
    p.innerText = "nem tudok programozni aaaa"
    div.appendChild(p)
}

function lep(a) {
    
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
    szinek.push("blue")
    if (jatekosok > 2) szinek.push("yellow")
    if (jatekosok == 4) szinek.push("green")
    for (let i = 0; i < 28; i++) {
        palya.push(document.getElementById(`m${i}`))
    }
}

function kezd() {
    var jatekosok = parseInt(document.querySelector("#jatekosok").value)
    nenezzide(jatekosok)
    huha()
    dobhat = true
    mivan = jatekosok
}