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

// amugy lehet ezt ugy kene hogy egyik unalmas ejszakamon fogom magam es kiirom az elemeket egy tombbe es ugy switchelgetek
// mert ugy talan konnyebb lenne es akkor konnyebb megoldani amikor egymasra lepnek hogy kiesnek
// uuuu mekkora genius vagyok azta (majd ezek a kommentek ki fognak kerulni a vegen esku)
// wait lehet hogy ez nem jo otlet mert hogy oldom meg mind a 4re....
// most igazabol csak elmelkedek mert programmers blockom van (writers block csak programozasbol 🤭)
// varj szerintem lehet olyat hogy a tdket rakom bele a tombbe es ooooooooooooooooooo
// na majd lesz valami zsoltika meglesz ez

function ezeketvajonhogykellswitchelni() {
    
}

function felrak(szin) {
    var babuk = document.querySelectorAll(`.${szin}`)
    var uhh = 0;
    for (var e=0; e<babuk.length; e++) {
        if (babuk.innerText=="x") uhh++
    }
    var start = document.querySelector(`#${szin}start`)
    ezeketvajonhogykellswitchelni(babuk[uhh], start)
}

function dob() {
    if (dobhat) {
        dobas = random(1, 6)
        console.log(dobas)
        if (!uhhfennvane[i] && dobas == 6) {
            felrak(szinek[i])
            uhhfennvane[i]=true
        }
        console.log(szinek[i])
        i++
        if (i > mivan-1) i = 0
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