const div = document.querySelector("div")
const p = document.createElement("p")
const h1 = document.createElement("h1")
var dobhat = false
var szinek = []
var i = 0
var mivan
var palya = []
var palyapoziciok = [
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27],
    [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 0, 1, 2, 3, 4, 5, 6],
    [21, 22, 23, 24, 25, 26, 27, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    [14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
]
var ennyitleptek = [0, 0, 0, 0]

function random(a, f) {
    return Math.floor(Math.random()*(f-a+1))+a;
}

function huha() {
    p.innerText = "nem tudok programozni aaaa"
    div.appendChild(p)
}

function lep(a) {
    let s = a.innerText
    a. innerText = palya[palyapoziciok[i][ennyitleptek[i]]].innerText
    palya[palyapoziciok[i][ennyitleptek[i]]].innerText = s
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