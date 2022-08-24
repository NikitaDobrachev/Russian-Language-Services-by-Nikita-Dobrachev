window.addEventListener('scroll', onScroll)

window.addEventListener('resize', showSlides);

onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButtonOnScroll()
  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(testimonials)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = targetLine >= sectionEndsAt

  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  if (sectionBoundaries) {
    menuElement.classList.add('active')
  } else {
    menuElement.classList.remove('active')
  }
}

function showNavOnScroll() {
  if (window.scrollY > 0) {
    document.getElementById('navigation').classList.add('scroll')
  } else {
    document.getElementById('navigation').classList.remove('scroll')
  }
}

function showBackToTopButtonOnScroll() {
  if (window.scrollY > 550) {
    document.getElementById('backToTopButton').classList.add('show')
  } else {
    document.getElementById('backToTopButton').classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
  #home, 
  #home img, 
  #home .stats, 
  #services header,
  #services .card,
  #testimonials header,
  #testimonials .carousel,
  #testimonials .businesses h3,
  #testimonials .businesses .businesses-logos,
  #contact-banner,
  #about,
  #about header,
  #about .content,
  #contact,
  #contact header,
  #contact .content`)


let windowWidthCheck = window.matchMedia(
    "(min-width: 1024px)");


let slideIndex = 1
showSlides(slideIndex)

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n))
}

function showSlides(n) {
  let i
  let slides = document.getElementsByClassName('carousel-card')
  let dots = document.getElementsByClassName('carousel-selector-dot')

  if (windowWidthCheck.matches) {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(' carousel-card-active', '')
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel-active', '')
    }
    slides[slideIndex - 1].className += ' carousel-card-active'
    slides[slideIndex - 1 + 3].className += ' carousel-card-active'
    dots[slideIndex - 1].className += ' carousel-active'
  }
   else {
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
      slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
      slides[i].className = slides[i].className.replace(' carousel-card-active', '')
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' carousel-active', '')
    }
    slides[slideIndex - 1].className += ' carousel-card-active'
    dots[slideIndex - 1].className += ' carousel-active'
  }
}

