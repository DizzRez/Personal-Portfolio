const burger = document.getElementById("burger");
const dropdownMenu = document.getElementById("dropdownMenu");

burger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});

let aboutmepic= document.querySelector('.imgcirc')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 50 * dx / window.innerWidth / 2
    let angleY = 50 * dy / window.innerHeight / 2
    aboutmepic.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})

let circles= document.querySelector('.circ-2')
document.addEventListener('mousemove', function(e) {
    let dx = e.pageX - window.innerWidth / 2
    let dy = e.pageY - window.innerHeight / 2
    let angleX = 50 * dx / window.innerWidth / 2
    let angleY = 50 * dy / window.innerHeight / 2
    circles.style.transform = `rotateX(${-angleY}deg) rotateY(${angleX}deg)`
})