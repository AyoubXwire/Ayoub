// If you want to modify links animation speed
let delaiToStartLinks = 0.3 // time to wait before animating links in seconds
let delaiBetweenlinks = 7 // time between each link animation (higher is faster)

const szBurger = document.querySelector('.sz-burger')
const szNavbar = document.querySelector('.sz-menu')
const szNavbarLinks = document.querySelectorAll('.sz-menu li')

szBurger.addEventListener('click', function() {
    // Toggle navbar links
    szNavbar.classList.toggle('active')

    // Toggle burger animation
    szBurger.classList.toggle('active')

    // Animate links
    szNavbarLinks.forEach(function(link, index) {
        if (link.style.animation) {
            link.style.animation = ''
        } else {
            link.style.animation = `sz-navbar-links-fade .5s ease forwards ${(index / delaiBetweenlinks) + delaiToStartLinks}s`
        }
    })
})

// Toggle sticky navbar
window.addEventListener("scroll", function() {
    const header = document.querySelector(".sz-navbar")
    header.classList.toggle("sticky", window.scrollY > 0)
})