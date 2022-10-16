// videos

let videos = document.querySelectorAll('video');
let progres = document.querySelector('.progres');
let barres = document.querySelectorAll('.barre');

videos.forEach(video => {
  video.addEventListener("click", () => {
    if (video.paused == false) {
      video.pause()
    } else {
      video.play()
    }
  })
  video.addEventListener('timeupdate', function() {
    barres.forEach(barre => {
      let ratio = video.currentTime/video.duration;
    console.log(ratio);
    barre.style.transform = `scaleX(${ratio})`;
    })
    
  })
})

// sonore

let playBtn = document.querySelector

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
