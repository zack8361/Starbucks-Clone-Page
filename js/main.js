//
//
//
//
//
//
//
//MAIN HEADER - SEARCH
const serachEl = document.querySelector(".search");
const searchInputEl = serachEl.querySelector("input");
//searchEl = 전체
//searchInputEl = 입력공

serachEl.addEventListener("click", function (e) {
  if (!searchInputEl.classList.contains("toggle")) {
    searchInputEl.focus();
    searchInputEl.classList.add("toggle");
  } else {
    alert("검색어를 입력하세요");
    searchInputEl.blur();
    searchInputEl.classList.remove("toggle");
  }
});

searchInputEl.addEventListener("focus", function () {
  searchInputEl.setAttribute("placeholder", "통합 검색");
});

searchInputEl.addEventListener("blur", function () {
  searchInputEl.setAttribute("placeholder", "");
});

//SWIPER
//SWIPER NOTICE
const swiperNotice = new Swiper(
  ".notice .notice-line .inner .inner__left .swiper",
  {
    direction: "vertical",
    loop: true,
    autoplay: true,
  }
);
//SWIPER PROMOTION
const swiperPromotion = new Swiper(".notice .promotion .swiper", {
  direction: "horizontal",
  loop: true,
  slidesPerView: 3,
  spaceBetween: 10,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  pagination: {
    el: ".promotion .swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".promotion .swiper-button-prev",
    nextEl: ".promotion .swiper-button-next",
  },
});

//컨트롤 AutoPlayControl
function controlAutoPlay() {
  if (swiperPromotion.autoplay.running === false) {
    swiperPromotion.autoplay.start();
  } else {
    swiperPromotion.autoplay.stop();
  }
}

//Toggle promotion
const promotionSection = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".notice .toggle-promotion");

promotionToggleBtn.addEventListener("click", function () {
  if (promotionSection.classList.contains("hide")) {
    promotionSection.classList.remove("hide");
    promotionToggleBtn.classList.add("show");
  } else {
    promotionSection.classList.add("hide");
    promotionToggleBtn.classList.remove("show");
  }
});

//애니메이션 파트

window.onload = function () {
  const visualSection = document.querySelector(".visual");
  visualSection.classList.add("animate");
};

//애니메이션 스크롤 파트
//엘살바도르

window.addEventListener("scroll", function () {
  console.log(window.scrollY);

  if (window.scrollY > 490) {
    const elsalvadorSection = this.document.querySelector(".elsalvador");
    elsalvadorSection.classList.add("animate");
  }

  if (window.scrollY > 1100) {
    const ethiopiaSection = this.document.querySelector(".ethiopia");
    ethiopiaSection.classList.add("animate");
  }

  if (window.scrollY > 1530) {
    const favoriteSection = this.document.querySelector(".favorite");
    favoriteSection.classList.add("animate");
  }
  //2370
  if (window.scrollY > 2370) {
    const magazineSection = this.document.querySelector(".magazine");
    magazineSection.classList.add("animate");
  }

  if (window.scrollY > 2850) {
    const storeSection = this.document.querySelector(".store");
    storeSection.classList.add("animate");
  }
});
