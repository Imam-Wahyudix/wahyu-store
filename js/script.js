// toggle class active
const navbarNav = document.querySelector(".navbar-nav");
// when clicked
document.querySelector("#daftar").onclick = () => {
  navbarNav.classList.toggle("active");
};
// klik dluar = close nav
const daftarz = document.querySelector("#daftar");
document.addEventListener("click", function (e) {
  if (!daftarz.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
document.getElementById('daftar').addEventListener('click', function(event) {
  event.preventDefault();
  // Tambahkan logika lain di sini jika perlu
});
