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

const form = document.getElementById("contactForm");
const status = document.getElementById("formStatus");
const btn = document.querySelector("button");

form.addEventListener("submit", function(e) {
    e.preventDefault();

    status.innerHTML = "Sending...";
    status.style.color = "black";
    btn.disabled = true;

    const formData = new FormData(form);

    fetch("https://formspree.io/f/xaqnbpbw", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        btn.disabled = false;

        if (response.ok) {
          status.innerHTML = "Message sent successfully!";
          status.style.color = "green";
          form.reset();
        } else {
          status.innerHTML = "Failed to send message.";
          status.style.color = "red";
        }
      })
      .catch((error) => {
        btn.disabled = false;
        status.innerHTML = "Network error. Please try again.";
        status.style.color = "red";
      });
});

const nameHeader = document.getElementById("nameHeader");

nameHeader.addEventListener("click", () => {
  dropdownMenu.classList.remove("active");
});

nameHeader.addEventListener("click", () => {
  dropdownMenu.classList.remove("active");
  window.scrollTo({ top: 0, behavior: "smooth" });
});
