let windowWidth = window.innerWidth;
let body

let main = document.querySelector('main')
let header = document.querySelector(".header")
let menu = document.querySelector('.menu')
let menuHamburger = document.querySelector('.menuHamburger')
let accueilLink = document.querySelector('.accueilLink');

let evrtng = document.querySelector('*')

let contactContainer = document.querySelector('.container')

window.addEventListener("load", () => {
    windowSize()
    console.log('window load')
})


window.addEventListener("resize", () => {
    windowSize()
})


function windowSize() {
    if (windowWidth <= 900) {
        // evrtng.style.fontSize = "1.3vw"
        // contactContainer.style.width = "100%"
        console.log("allo?")
        windowWidth = window.innerWidth;
        console.log(windowWidth)

        body = document.querySelector('body')
        body.style.fontSize = "4vw"

        menu = document.querySelector('.menu')
        menuHamburger = document.querySelector('.menuHamburger')
        menu.style.display = "none"
        menuHamburger.style.display = "block"
        accueilLink = document.querySelector('.accueilLink')
        accueilLink.style.display = "none"
        header = document.querySelector(".header")
        header.style.boxShadow = "none"

        let aProposTitre = document.querySelector('.a_propos div')
        aProposTitre.style.display = "none"
    }
}