let windowWidth = window.innerWidth;

let main = document.querySelector('main')
let header = document.querySelector(".header")
  let menu = document.querySelector('.menu')
  let menuHamburger = document.querySelector('.menuHamburger')

let evrtng = document.querySelector('*')

let contactContainer = document.querySelector('.container')

window.addEventListener("load", () => {
    windowSize()
})

window.addEventListener("resize", () => {
    windowSize()
})


function windowSize() {
    if (windowWidth <= 500) {
        // evrtng.style.fontSize = "1.3vw"
        // contactContainer.style.width = "100%"
        console.log("allo?")
        windowWidth = window.innerWidth;
        console.log(windowWidth)

        menu.style.display = "none"
        menuHamburger.style.display = "block"
        console.log("allo?")
    }
}