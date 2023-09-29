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