 const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 2000);

 
 const body = document.body;
      const modeToggle = document.querySelector(".switch");

      modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
      });
    const hamburger = document.querySelector(".hamburger");
      const navLinks = document.querySelector(".nav-links");
      const links = document.querySelectorAll(".nav-links li");

      hamburger.addEventListener("click", () => {
        navLinks.classList.toggle("open");
        links.forEach((link) => {
          link.classList.toggle("fade");
        });
      });
function toggleBacktop() {
  if (
    document.body.scrollTop > 200 ||
    document.documentElement.scrollTop > 200
  ) {
    backtop.classList.add('backtop-show')
  } else {
    backtop.classList.remove('backtop-show')
  }
}
galleryItems.forEach(el => {
    let linkTag = el.querySelector('a');
    linkTag.addEventListener('click', (e) => {
        e.preventDefault();
        openLightBox(el);
    });
});

 window.addEventListener("scroll", function () {
   shrink();
 });
 
 let navbar = document.getElementById("navbar");
 
 function shrink() {
   if (scrollY > 100) {
     navbar.classList.add("navbar-shrink");
   } else {
       navbar.classList.remove("navbar-shrink");
    }
 }