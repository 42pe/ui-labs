document.addEventListener('DOMContentLoaded', function() {
  const uslider = document.querySelector('.uilab_duo-slider')
  const tracks = uslider.querySelectorAll('.track')

  Array.from(tracks).forEach((track, i) => {
    const slides = track.querySelectorAll('.slide')
    Array.from(slides).forEach((slide, i) => {
      if (i === 0) {
        slide.classList.add('current')
      }
      if (i === 1) {
        slide.classList.add('next')
      }
    })
  })

  const intval = setInterval(() => {
    const currentSlides = document.querySelectorAll('.slide.current')
    const nextSlides = document.querySelectorAll('.slide.next')
    Array.from(currentSlides).forEach((slide, i) => {
      slide.classList.add('toPrev')
    })
    Array.from(nextSlides).forEach((slide, i) => {
      slide.classList.add('toCurrent')
    })
    const timeout = setTimeout(() => {
      const toPrevSlides = document.querySelectorAll('.slide.toPrev')
      const toCurrentSlides = document.querySelectorAll('.slide.toCurrent')
      Array.from(toCurrentSlides).forEach(slide => {
        slide.classList.remove('toCurrent')
        slide.classList.remove('next')
        slide.classList.add('current')
      })
      Array.from(toPrevSlides).forEach(slide => {
        slide.classList.remove('toPrev')
        slide.classList.remove('current')
        slide.classList.add('next')
      })
    }, 500)
  }, 4500)
})
