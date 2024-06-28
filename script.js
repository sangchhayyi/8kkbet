const openMenu=()=>{
    let menu=document.getElementsByClassName("nav")[0];
    menu.style.left="0%"
}
const closeMenu=()=>{
    let menu=document.getElementsByClassName("nav")[0];
    menu.style.left="-100%"
}
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    loop: true,
    effect: "fade",
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  