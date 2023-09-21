// sonore

let playBtn1 = document.querySelector('.playBtn1')
let stopBtn1 = document.querySelector('.stopBtn1')
let playBtn2 = document.querySelector('.playBtn2')
let stopBtn2 = document.querySelector('.stopBtn2')
let montage = document.querySelector('.montage_audio')
let tempsReel = document.querySelector('.tempsreel_audio')

playBtn1.addEventListener("click", () => {
  montage.play()
  playBtn1.style.display = "none"
  stopBtn1.style.display = "block"
})
stopBtn1.addEventListener("click", () => {
  montage.pause()
  stopBtn1.style.display = "none"
  playBtn1.style.display = "block"
})

if (montage.currentTime == montage.duration) {
  montage.currentTime = 0
  montage.pause()
  stopBtn1.style.display = "none"
  playBtn1.style.display = "block"
}

playBtn2.addEventListener("click", () => {
  tempsReel.play()
  playBtn2.style.display = "none"
  stopBtn2.style.display = "block"
})
stopBtn2.addEventListener("click", () => {
  tempsReel.pause()
  stopBtn2.style.display = "none"
  playBtn2.style.display = "block"
})

if (tempsReel.currentTime == tempsReel.duration) {
  tempsReel.currentTime = 0
  tempsReel.pause()
  stopBtn2.style.display = "none"
  playBtn2.style.display = "block"
}

// Header

window.addEventListener("scroll", () => {
  let header = document.querySelector(".header")
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop
  let nom = document.querySelector(".nom")
  let windowWidth = window.innerWidth;
  let menu = document.querySelector(".menu")

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
    } else {
      header.style.height = '4%'
      nom.style.fontSize = '5vw'
    }
  }
  
})

