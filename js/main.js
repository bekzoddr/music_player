  const body = document.body;
      const modeToggle = document.querySelector(".switch");

      modeToggle.addEventListener("click", () => {
        body.classList.toggle("dark");
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


