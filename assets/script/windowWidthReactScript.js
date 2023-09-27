window.addEventListener("load", () => {
    let windowWidth = window.innerWidth;
    console.log(windowWidth)

    let main = document.querySelector('main')

    let evrtng = document.querySelector('*')

    let contactContainer = document.querySelector('.container')

    if (windowWidth <= 500) {
        evrtng.style.fontSize = "24px"
        contactContainer.style.width = "100%"
    }
})