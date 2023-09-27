// Header

window.addEventListener("load", () => {
  let windowWidth = window.innerWidth;
  let header = document.querySelector(".header")
  let menu = document.querySelector('.menu')
  let menuHamburger = document.querySelector('.menuHamburger')
  
})

window.addEventListener("scroll", () => {
    let header = document.querySelector(".header")
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop
    let nom = document.querySelector(".nom")
    let windowWidth = window.innerWidth;
    let menu = document.querySelector(".menu")

    if (windowWidth > 900) {
      if (scrollTop > 0) {
        header.style.height = '5%'
        nom.style.fontSize = '2vw'
      } else {
        header.style.height = '20%'
        nom.style.fontSize = '5vw'
        // menu.style.transform = "translateY(50px)" 
      }
    }
    
  
    if (windowWidth >= 1500) {
      if (scrollTop > 0) {
        header.style.height = '5%'
        nom.style.fontSize = '2vw'
      } else {
        header.style.height = '20%'
        nom.style.fontSize = '5vw'
        // menu.style.transform = "translateY(50px)" 
      }
    } else if (windowWidth >= 1200) {
      if (scrollTop > 0) {
        header.style.height = '5%'
        nom.style.fontSize = '2vw'
      } else {
        header.style.height = '7%'
        nom.style.fontSize = '5vw'
      }
    } else if (windowWidth >= 900) {
      if (scrollTop > 0) {
        header.style.height = '5%'
        nom.style.fontSize = '2vw'
       }  else {
         header.style.height = '4%'
         nom.style.fontSize = '5vw'
       }
    }
    
  })

// drop down menu

// Get the dropdown button and content
let dropdownButton = document.querySelector(".dropBtnProjet");
let dropdownContent = document.querySelector(".dropContent");

// Toggle the dropdown when the button is clicked
dropdownButton.addEventListener("click", () => {
    dropdownContent.style.display = (dropdownContent.style.display === "block") ? "none" : "block";
});

// Close the dropdown if the user clicks outside of it
window.addEventListener("click", (event) => {
    if (!event.target.matches(".dropBtnProjet")) {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        }
    }
});