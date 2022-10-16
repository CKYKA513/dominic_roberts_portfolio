// videos

let videos = document.querySelectorAll('video');
let videoIl = document.querySelector('.video_il')
let videoManiac = document.querySelector('.video_maniac')
let progres1 = document.querySelector('.progres1');
let barre1 = document.querySelector('.barre1');
let progres2 = document.querySelector('.progres2')
let barre2 = document.querySelector('.barre2')

videos.forEach(video => {
  video.addEventListener("click", () => {
    if (video.paused == false) {
      video.pause()
    } else {
      video.play()
    }
  })
  if (video.currentTime == video.duration) {
    video.currentTime = 0
    video.pause()
  }
})

videoIl.addEventListener('timeupdate', function() {
  let ratio = videoIl.currentTime/videoIl.duration;
  console.log(ratio);
  barre1.style.transform = `scaleX(${ratio})`;
  
})

videoManiac.addEventListener('timeupdate', function() {
  let ratio = videoManiac.currentTime/videoManiac.duration;
  console.log(ratio);
  barre2.style.transform = `scaleX(${ratio})`;
  
})

// sonore

let playBtn1 = document.querySelector('.playBtn1')
let stopBtn1 = document.querySelector('.stopBtn1')
let playBtn2 = document.querySelector('.playBtn2')
let stopBtn2 = document.querySelector('.stopBtn2')
let montage = document.querySelector('.montage_audio')
let tempsReel = document.querySelector('.tempsreel_audio')

stopBtn1.style.display = "none"
stopBtn2.style.display = "none"

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

// slider

// let btnRight = document.querySelector('.droite')
// let btnLeft = document.querySelector('.gauche')
// let img = document.querySelector('.img')
// let i = 1;
// img.getElementsByClassName.backgroundImage = "url('img/autoportrait_01.jpg')"

// btnLeft.addEventListener("click", () => {
//   i--
//   if (i < 1) {
//     i = 6
//   }
//   img.innerHTML = `<img src="assets/img/autoportrait_0${i}.jpg" alt="autoportrait_0${i}">`
//   console.log(i)
//   console.log(img.innerHTML)
// })

// btnRight.addEventListener("click", () => {
//   i++
//   if (i > 6) {
//     i = 1
//   }
//   img.innerHTML = `<img src="assets/img/autoportrait_0${i}.jpg" alt="autoportrait_0${i}">`
//   console.log(i)
//   console.log(img.innerHTML)
// })




// const swiper = new Swiper('.swiper', {
//   // Optional parameters
//   // direction: 'vertical',
//   loop: true,
//   // Navigation arrows
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// });
