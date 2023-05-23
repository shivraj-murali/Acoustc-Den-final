var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});






// const sectionHero = document.querySelector(".section-hero");

// const observe = new IntersectionObserver(
//   function (entries) {
//     const ent1 = entries[0];
//     console.log(ent1);

//     if (ent1.isIntersecting === false) {
//       document.body.classList.remove("bg-color");
//     }

//     if (ent1.isIntersecting === true) {
//       document.body.classList.add("bg-color");
//     }
//   },
//   {
//     // In the viewport
//     root: null,
//     threshold: 0,
//     rootMargin: "-80px",
//   }
// );
// observe.observe(sectionHero);




