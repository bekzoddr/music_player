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

galleryItems.forEach(el => {
    let linkTag = el.querySelector('a');
    linkTag.addEventListener('click', (e) => {
        e.preventDefault();
        openLightBox(el);
    });
});



const loading = document.getElementById("loader");


setTimeout(() => {
  loading.classList.add("loading-none");
}, 2000);


