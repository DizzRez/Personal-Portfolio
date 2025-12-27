const burger = document.getElementById("burger");
const dropdownMenu = document.getElementById("dropdownMenu");

burger.addEventListener("click", () => {
  dropdownMenu.classList.toggle("active");
});
