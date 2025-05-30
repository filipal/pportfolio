// ===== GLOBALNE VARIJABLE I EVENTI =====
const zoomContainer = document.createElement("div");
zoomContainer.classList.add("zoomed-img-container", "hidden");

const zoomedImage = document.createElement("img");
zoomContainer.appendChild(zoomedImage);
document.body.appendChild(zoomContainer);

// Zatvaranje zoom prikaza
zoomContainer.addEventListener("click", function () {
  zoomContainer.classList.add("hidden");
});

let header, logoHeader, sevicesBtn, burgerServices, lastScrollTop = 0;
let bufButton;

gsap.set(".ball", { xPercent: -50, yPercent: -50 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

const xTo = gsap.quickTo(".ball", "x", { duration: 0.000001 });
const yTo = gsap.quickTo(".ball", "y", { duration: 0.000001 });
const xToCurs = gsap.quickTo(".cursor", "x", { duration: 0.000001 });
const yToCurs = gsap.quickTo(".cursor", "y", { duration: 0.000001 });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
  xToCurs(e.clientX);
  yToCurs(e.clientY);
});

window.onscroll = () => scrollHide();

window.onbeforeunload = () => window.scrollTo(0, 0);
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}

// function initTabbedGallery() {
//   const galleryData = {
//     portfolio1: {
//       screengrabs: [
//         "/assets/images/dpe1.png",
//         "/assets/images/dpe2.png",
//         "/assets/images/dpe3.png",
//         "/assets/images/dpe4.png",
//         "/assets/images/dpe5.png",
//         "/assets/images/dpe6.png",
//         "/assets/images/dpe7.png",
//         "/assets/images/dpe8.png"
//       ],
//       turntables: [
//         { type: "video", src: "/assets/video/DPEGun.mp4", poster: "/assets/images/video-thumb1.png" },
//         { type: "video", src: "/assets/video/DPESkeleton.mp4", poster: "/assets/images/video-thumb2.png" },
//         { type: "video", src: "/assets/video/DPETent.mp4", poster: "/assets/images/video-thumb3.png" }
//       ]
//     },

//     portfolio2: {
//       screengrabs: [
//         { type: "compare", before: "/assets/images/1Lit.png", after: "/assets/images/1unlit.png" },
//         { type: "compare", before: "/assets/images/2Lit.png", after: "/assets/images/2unlit.png" },
//         { type: "compare", before: "/assets/images/3Lit.png", after: "/assets/images/3unlit.png" },
//         { type: "compare", before: "/assets/images/4Lit.png", after: "/assets/images/4unlit.png" },
//         { type: "compare", before: "/assets/images/5Lit.png", after: "/assets/images/5unlit.png" },
//         { type: "compare", before: "/assets/images/6Lit.png", after: "/assets/images/6unlit.png" },
//         { type: "compare", before: "/assets/images/7Lit.png", after: "/assets/images/7unlit.png" },
//         { type: "compare", before: "/assets/images/8Lit.png", after: "/assets/images/8unlit.png" },
//         { type: "compare", before: "/assets/images/9Lit.png", after: "/assets/images/9unlit.png" },
//         { type: "compare", before: "/assets/images/10Lit.png", after: "/assets/images/10unlit.png" },
//         { type: "compare", before: "/assets/images/11Lit.png", after: "/assets/images/11unlit.png" }
//       ],
//       randers: [
//         "/assets/images/UWChandilier.png",
//         "/assets/images/UWDesk.png",
//         "/assets/images/UWGlobe.png",
//         "/assets/images/UWHatch.png",
//         "/assets/images/UWQuill.png",
//         "/assets/images/UWTeaPot.png"
//       ],
//       turntables: [
//         { type: "video", src: "/assets/video/UWBedlamp_Turntable.mp4", poster: "/assets/images/UWBedlamp_Turntable.png" },
//         { type: "video", src: "/assets/video/UWMermaid_Turntable.mp4", poster: "/assets/images/UWMermaid_Turntable.png" },
//         { type: "video", src: "/assets/video/UWRoomDivider_TurnTable.mp4", poster: "/assets/images/UWRoomDivider_TurnTable.png" },
//         { type: "video", src: "/assets/video/UWTable-TurnTable.mp4", poster: "/assets/images/UWTable-TurnTable.png" },
//         { type: "video", src: "/assets/video/UWTeaCup_Turntable.mp4", poster: "/assets/images/UWTeaCup_Turntable.png" }
//       ]
//     }
//   };
//   function loadGalleryContent(galleryId, tabId) {
//     const container = document.querySelector(`#${galleryId} .gallery__slider.${galleryId}-${tabId}`);
//     if (!container) return;

//     const wrapper = container.querySelector(".swiper-wrapper");
//     if (!wrapper) return;

//     wrapper.innerHTML = "";

//     const slides = galleryData[galleryId][tabId];
//     slides.forEach((item) => {
//       let slide = "";

//       if (typeof item === "string") {
//         slide = `<div class="swiper-slide gallery__item btn-hover"><img src="${item}" alt="" /></div>`;
//       } else if (item.type === "video") {
//         slide = `<div class="swiper-slide gallery__item btn-hover">
//                     <video src="${item.src}" poster="${item.poster}" controls style="width:100%;height:326px;object-fit:cover;"></video>
//                 </div>`;
//       } else if (item.type === "compare") {
//         slide = `<div class="swiper-slide gallery__item btn-hover">
//                     <div class="image-compare">
//                       <img src="${item.before}" class="before" alt="Prva verzija" />
//                       <img src="${item.after}" class="after" alt="Druga verzija" />
//                       <div class="slider-bar"></div>
//                       <input type="range" min="0" max="100" value="50" class="slider-range" aria-label="Povuci za usporedbu">
//                     </div>
//                 </div>`;
//       }

//       wrapper.insertAdjacentHTML("beforeend", slide);
//     });

//     if (container.swiper) {
//       container.swiper.destroy(true, true);
//     }

//     new Swiper(container, {
//       loop: true,
//       speed: 600,
//       slidesPerView: 2.5,
//       spaceBetween: 20,
//       centeredSlides: true,
//       navigation: {
//         nextEl: `#${galleryId} .portolio__next1`,
//         prevEl: `#${galleryId} .portolio__prew1`,
//       },
//       breakpoints: {
//         375: { slidesPerView: 1.2, centeredSlides: false },
//         500: { slidesPerView: 2 },
//         788: { slidesPerView: 2, spaceBetween: 20 },
//         1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
//         1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
//       },
//     });
//   }

//   // postavljanje event listenera na tabove
//   document.querySelectorAll(".tab__btn").forEach((btn) => {
//     btn.addEventListener("click", () => {
//       const galleryId = btn.closest(".gallery").id;
//       const tabId = btn.dataset.tab;

//       const allBtns = btn.closest(".tabs__control").querySelectorAll(".tab__btn");
//       allBtns.forEach((el) => el.classList.remove("active"));
//       btn.classList.add("active");

//       const allSliders = document.querySelectorAll(`#${galleryId} .gallery__slider`);
//       allSliders.forEach((slider) => slider.classList.remove("active"));

//       const targetSlider = document.querySelector(`#${galleryId} .${galleryId}-${tabId}`);
//       if (targetSlider) targetSlider.classList.add("active");

//       loadGalleryContent(galleryId, tabId);
//     });
//   });

//   // Učitaj početni sadržaj za svaki slider
//   loadGalleryContent("portfolio1", "screengrabs");
//   loadGalleryContent("portfolio2", "screengrabs");
// }

function initSketchGalleryZoom() {
  const sketchImages = document.querySelectorAll(".model-placeholder-gallery img");

  sketchImages.forEach((img) => {
    img.addEventListener("click", function () {
      zoomedImage.src = this.src;
      zoomContainer.classList.remove("hidden");
    });
  });
}

// ===== DOMContentLoaded =====
document.addEventListener("DOMContentLoaded", () => {
  cacheDOMElements();
  setBufButton();
  initBurgerServicesMenu();
  initBurgerMobileMenu();
  initCF7Buttons();
  initBurgerAnimation();
  initHoverButtons();
  initCustomCursorHover();
  initPopup();
  initTitleAnimation();
  initSwiperGallery();
  initZoomGallery();
  initSketchZoom();
  initModelSlider();
  initCarousel();
  initFormValidation();
  initHeroVideoFreeze();
  animateDesktopHeader();
  initAllCustomSliders();
  initVerticalCustomSliders();
  initMainSlideZoom();
  initSketchGalleryZoom()
  initImageCompareSliders();
  // initGallerySwipers()
  // initTabbedGallery();
});

// ===== FUNKCIJE =====

function cacheDOMElements() {
  header = document.querySelector(".header");
  logoHeader = header?.querySelector(".logo");
  sevicesBtn = document.querySelector(".sevicesBtn");
  burgerServices = document.querySelector(".burger_services");
}

function setBufButton() {
  bufButton = window.innerWidth < 768 ? "-118px" : "-140px";
}

function scrollHide() {
  const st = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth < 500) {
    if (st > lastScrollTop) {
      header?.classList.add("nav-up");
    } else {
      header?.classList.remove("nav-up");
    }
  }

  logoHeader?.classList.add("small");
  sevicesBtn?.classList.remove("active");
  burgerServices?.classList.remove("active");

  if (window.scrollY === 0) {
    logoHeader?.classList.remove("small");
  }

  lastScrollTop = st <= 0 ? 0 : st;
}


function initBurgerServicesMenu() {
  const burgerServices = document.querySelector(".burger_services");
  const sevicesBtn = document.querySelector(".sevicesBtn");
  if (!burgerServices || !sevicesBtn) return;

  sevicesBtn.addEventListener("click", () => {
    sevicesBtn.classList.toggle("active");
    burgerServices.classList.toggle("active");
  });

  document.addEventListener("click", (event) => {
    const isInsidePopup = burgerServices.contains(event.target);
    const isServicesBtn = sevicesBtn.contains(event.target);
    if (!isInsidePopup && !isServicesBtn) {
      burgerServices.classList.remove("active");
      sevicesBtn.classList.remove("active");
    }
  });
}


function initBurgerMobileMenu() {
  bufButton = window.innerWidth < 768 ? "-118px" : "-140px";
}

function initBurgerAnimation() {
  const menuBtn = document.querySelector(".menu");
  const menuBurger = document.querySelector(".burger");
  const headerMobile = document.querySelector(".header__mobile");
  const menuBurgerBg = document.querySelector(".burger__bg");
  const menuItems = document.querySelectorAll(".burger__item");
  const body = document.querySelector(".body");

  if (!menuBtn || !menuBurger || !headerMobile || !menuBurgerBg || !body) return;

  const tl = gsap.timeline({ paused: true });

  tl.to(headerMobile, { opacity: 1, duration: 0.2 }, 0)
    .to(menuBurger, {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    }, 0.3)
    .to(menuBurgerBg, {
      top: 0,
      duration: 1.2,
      ease: "power4.out",
    }, 0)
    .from(menuItems, {
      opacity: 0,
      scale: 0.7,
      duration: 0.7,
      ease: "power4.out",
    }, 0.7);

  function doBurger() {
    if (menuBtn.classList.contains("open")) {
      tl.play();
      body.classList.add("lock");
    } else {
      tl.reverse();
      body.classList.remove("lock");
    }
  }

  menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("open");
    doBurger();
  });
}


function initCF7Buttons() {
  const cf7Buttons = document.querySelectorAll(".cf7btn");

  cf7Buttons.forEach((cf7Button) => {
    const newButton = document.createElement("button");
    newButton.className = "btn btn-hover wpcf7-form-control wpcf7-submit has-spinner";
    newButton.type = "submit";

    const buttonContent = document.createElement("div");
    buttonContent.className = "btn__wrap btn-hover";

    const paragraph = document.createElement("p");
    paragraph.textContent = "send out";

    const innerDiv = document.createElement("div");
    innerDiv.className = "btn__inner";

    const img = document.createElement("img");
    img.src = "/assets/images/btn-arrow.svg";
    img.alt = "";

    innerDiv.appendChild(img);
    buttonContent.appendChild(paragraph);
    buttonContent.appendChild(innerDiv);
    newButton.appendChild(buttonContent);

    cf7Button.parentNode.replaceChild(newButton, cf7Button);
  });
}

function initHoverButtons() {
  const btns = document.querySelectorAll(".btn");

  btns.forEach((elem) => {
    elem.addEventListener("mouseenter", () => {
      const btnText = elem.querySelector("p");
      const btnInner = elem.querySelector(".btn__inner");
      const btnInnerImg = btnInner.querySelector("img");

      btnInnerImg.src = "/assets/images/btn-arrow-black.svg";

      gsap.to(btnInner, {
        left: bufButton,
        backgroundColor: "#fff",
        duration: 0.5,
      });

      gsap.to(btnText, {
        right: -60,
        duration: 0.5,
      });
    });

    elem.addEventListener("mouseleave", () => {
      const btnText = elem.querySelector("p");
      const btnInner = elem.querySelector(".btn__inner");
      const btnInnerImg = btnInner.querySelector("img");

      btnInnerImg.src = "/assets/images/btn-arrow.svg";

      gsap.to(btnInner, {
        left: 0,
        backgroundColor: "#282828",
        duration: 0.5,
      });

      gsap.to(btnText, {
        right: 0,
        duration: 0.5,
      });

      btnInner.classList.remove("mix");
    });
  });
}

function initCustomCursorHover() {
  const ball = document.querySelector(".ball");
  if (!ball) return;

  const interactiveElements = [
    ...document.querySelectorAll("a"),
    ...document.querySelectorAll("button"),
    ...document.querySelectorAll("input"),
    ...document.querySelectorAll("textarea"),
    ...document.querySelectorAll(".btn-hover"),
  ];

  interactiveElements.forEach((element) => {
    element.addEventListener("mouseenter", () => {
      gsap.to(ball, {
        scale: 3,
        backgroundColor: "#ebedec",
        opacity: 0.3,
        ease: "power3.out",
        duration: 1,
      });
    });

    element.addEventListener("mouseleave", () => {
      gsap.to(ball, {
        scale: 1,
        backgroundColor: "transparent",
        opacity: 1,
        ease: "power3.out",
        duration: 1,
      });
    });
  });
}

function initTitleAnimation() {
  gsap.utils.toArray(".title").forEach((title) => {
    gsap.from(title, {
      opacity: 0,
      duration: 1.5,
      x: 60,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: title,
        start: "top 90%",
        end: "top 40%",
        scrub: 1,
        onUpdate: (self) => {
          title.style.opacity = self.progress;
        },
      },
    });
  });
}

function headerAnima(delay = 0) {
  // Animacija za logo
  gsap.fromTo(
    ".logo",
    { opacity: 0, y: -40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: delay,
      ease: "power2.out",
    }
  );

  // Animacija za navigacijske stavke
  gsap.fromTo(
    ".navigation__item",
    { opacity: 0, y: -40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      delay: delay + 0.3,
      stagger: 0.2,
      ease: "power2.out",
    }
  );
}





function initPopup() {
  const openPopup = document.querySelectorAll(".openPopup");
  const closePopup = document.querySelector(".closePopup");
  const popup = document.querySelector(".popup");
  const popupInner = document.querySelector(".popup");
  const body = document.querySelector(".body");

  if (!popup || !body) return;

  openPopup.forEach((btn) => {
    btn.addEventListener("click", () => {
      popup.classList.add("active");
      body.classList.add("lock");
    });
  });

  closePopup?.addEventListener("click", () => {
    popup.classList.remove("active");
    body.classList.remove("lock");
  });

  popup.addEventListener("click", (event) => {
    if (event.target === popupInner) {
      popup.classList.remove("active");
      body.classList.remove("lock");
    }
  });
}

function initZoomGallery() {
  const images = document.querySelectorAll(".mySwiper .swiper-slide img");
  if (!images.length) return;

  images.forEach((img) => {
    img.addEventListener("click", function () {
      zoomedImage.src = this.src;
      zoomContainer.classList.remove("hidden");
    });
  });
}


function initSketchZoom() {
  const sketchImages = document.querySelectorAll(".sketch img");

  sketchImages.forEach((img) => {
    img.addEventListener("click", function () {
      const overlay = document.createElement("div");
      overlay.classList.add("lightbox");
      overlay.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
        overlay.remove();
      });
    });
  });
}

function initModelSlider() {
  new Swiper(".gallery__model1", {
    loop: true,
    speed: 600,
    slidesPerView: 2.5,
    spaceBetween: 20,
    centeredSlides: true,
    navigation: {
      nextEl: ".model-next",
      prevEl: ".model-prev",
    },
    breakpoints: {
      375: { slidesPerView: 1.2, centeredSlides: false },
      500: { slidesPerView: 2 },
      788: { slidesPerView: 2, spaceBetween: 20 },
      1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
      1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    },
  });
}

function initCarousel() {
  const carouselContainer = document.querySelector(".bootstrap-carousel-scope #carouselExampleDark");

  if (carouselContainer) {
    new bootstrap.Carousel(carouselContainer, {
      interval: 3000,
      ride: "carousel",
      pause: "hover",
    });
  }
}

function initFormValidation() {
  const letterArr = document.querySelectorAll(".letters");
  const numberArr = document.querySelectorAll(".numbers");

  letterArr.forEach((input) => {
    IMask(input, { mask: /^[a-zA-Z-a-яА-Я]+$/ });
  });

  numberArr.forEach((input) => {
    IMask(input, { mask: Number });
  });
}

function initSwiperGallery() {
  const container = document.querySelector(".gallery__slider1");
  if (!container) return;

  // Inicijalizacija bez loopa da izbjegnemo konflikt sa globalnim resetom
  const gallerySwiper = new Swiper(container, {
    loop: false,
    speed: 600,
    slidesPerView: 2.5,
    centeredSlides: false,
    spaceBetween: 20,
    grabCursor: true,
    allowTouchMove: true,
    simulateTouch: true,
    mousewheel: {
      enabled: true,
    },
    navigation: {
      nextEl: ".portolio__next1",
      prevEl: ".portolio__prew1",
    },
  });

  // Nakon što globalni blocks.js resetira sve, ručno aktiviramo loop
  setTimeout(() => {
    gallerySwiper.params.loop = true;
    gallerySwiper.loopedSlides = 6;              // broj stvarnih slajdova
    gallerySwiper.loopAdditionalSlides = 2;      // sigurnosni buffer
    gallerySwiper.loopCreate();
    gallerySwiper.update();
    gallerySwiper.slideToLoop(0, 0);             // pozicioniranje na početak
    console.log("🔁 Loop reaktiviran za gallery__slider1");
  }, 1200);
}

function initHeroVideoFreeze() {
  const video = document.getElementById("rotationVideo");
  const freezeTime = 5.5;

  if (!video) return;

  video.addEventListener("loadedmetadata", () => {
    video.currentTime = 0.01;
    video.play();
  });

  video.addEventListener("timeupdate", () => {
    if (video.currentTime >= freezeTime) {
      video.pause();
      video.currentTime = freezeTime; // osiguraj da stane točno tu
    }
  });
}

function animateDesktopHeader() {
  // Animiraj logo
  gsap.from(".header .logo", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    delay: 0.2,
    ease: "power2.out"
  });

  // Animiraj linkove u nav-u (ili prilagodi ako koristiš drugačiju strukturu)
  gsap.from(".header__desktop .navigation__item", {
    opacity: 0,
    y: -20,
    duration: 0.6,
    delay: 0.4,
    stagger: 0.15,
    ease: "power2.out"
  });
}


function initAllCustomSliders() {
  document.querySelectorAll('.custom-slider').forEach((slider, sliderIdx) => {
    const mainSlide = slider.querySelector('.main-slide');
    const thumbs = slider.querySelectorAll('.zXBoYT');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');

    if (!mainSlide || !thumbs.length) return;

    let current = 0;

    function showSlide(idx) {
      thumbs.forEach(t => t.classList.remove('IvMxfA'));
      thumbs[idx].classList.add('IvMxfA');
      const img = thumbs[idx].querySelector('img');
      mainSlide.src = img.src;
      mainSlide.alt = img.alt;
      current = idx;
    }

    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', function () {
        showSlide(idx);
      });
    });

    prevBtn?.addEventListener('click', function () {
      let idx = (current - 1 + thumbs.length) % thumbs.length;
      showSlide(idx);
    });

    nextBtn?.addEventListener('click', function () {
      let idx = (current + 1) % thumbs.length;
      showSlide(idx);
    });

    // Init
    showSlide(0);
  });
}

function initVerticalCustomSliders() {
  document.querySelectorAll('.custom-slider-vertical').forEach((slider) => {
    const mainSlide = slider.querySelector('.main-slide');
    const thumbs = slider.querySelectorAll('.thumbnails-row .zXBoYT');
    const prevBtn = slider.querySelector('.slider-prev');
    const nextBtn = slider.querySelector('.slider-next');

    if (!mainSlide || !thumbs.length) return;

    let current = 0;

    function showSlide(idx) {
      thumbs.forEach(t => t.classList.remove('IvMxfA'));
      thumbs[idx].classList.add('IvMxfA');
      const img = thumbs[idx].querySelector('img');
      mainSlide.src = img.src;
      mainSlide.alt = img.alt;
      current = idx;
    }

    thumbs.forEach((thumb, idx) => {
      thumb.addEventListener('click', function () {
        showSlide(idx);
      });
    });

    prevBtn?.addEventListener('click', function () {
      let idx = (current - 1 + thumbs.length) % thumbs.length;
      showSlide(idx);
    });

    nextBtn?.addEventListener('click', function () {
      let idx = (current + 1) % thumbs.length;
      showSlide(idx);
    });

    // Init
    showSlide(0);
  });
}

function initMainSlideZoom() {
  document.querySelectorAll('.gallery__slider1.active img').forEach(function(mainImg) {
    mainImg.style.cursor = 'zoom-in';
    mainImg.addEventListener('click', function(e) {
      // Spriječi zoom ako je klik bio na slider-range (input)
      if (e.target.classList.contains('slider-range')) return;
      const overlay = document.getElementById('imageOverlay');
      const overlayImg = document.getElementById('overlayImage');
      overlayImg.src = mainImg.src;
      overlayImg.alt = mainImg.alt;
      overlay.classList.add('active');
    });
  });

  var overlay = document.getElementById('imageOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === overlay || e.target === document.getElementById('overlayImage')) {
        overlay.classList.remove('active');
        document.getElementById('overlayImage').src = '';
      }
    });
  }
}



function disableSwiperOnVideoClick(swiperSelector) {
  document.querySelectorAll(swiperSelector + ' video').forEach(video => {
    ['mousedown', 'touchstart', 'click'].forEach(eventType => {
      video.addEventListener(eventType, function(e) {
        e.stopPropagation();
      });
    });
  });
}



function initImageCompareSliders() {
  document.querySelectorAll('.image-compare').forEach(compare => {
    const range = compare.querySelector('.slider-range');
    const after = compare.querySelector('.after');
    const bar = compare.querySelector('.slider-bar');
    const beforeImg = compare.querySelector('.before');

    if (!range || !after || !bar || !beforeImg) return;

    // Blokiraj bubble s input slidera
    range.addEventListener('mousedown', e => e.stopPropagation());
    range.addEventListener('touchstart', e => e.stopPropagation());
    range.addEventListener('click', e => e.stopPropagation());

    // Pomiči after sliku i slider bar
    range.addEventListener('input', e => {
      const val = e.target.value;
      after.style.clipPath = `inset(0 0 0 ${val}%)`;
      bar.style.left = `${val}%`;
    });

    // Početna postavka
    after.style.clipPath = `inset(0 0 0 50%)`;
    bar.style.left = `50%`;

    // Zoom na klik unutar compare elementa
    compare.addEventListener('click', (e) => {
      const compareRect = compare.getBoundingClientRect();
      const clickX = e.clientX - compareRect.left;
      const centerX = compareRect.width * (parseFloat(range.value) / 100);

      const beforeImg = compare.querySelector('.before');
      const afterImg = compare.querySelector('.after');

      const clickedImg = clickX < centerX ? beforeImg : afterImg;

      zoomedImage.src = clickedImg.src;
      zoomContainer.classList.remove('hidden');
    });
  });
}









// ===== POMOĆNE FUNKCIJE ZA HTML EVENTE =====

function scrollToSection(event, sectionId) {
  if (event.target.closest(".accordion")) {
    event.stopPropagation();
    return;
  }
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function toggleAccordion(header) {
  const item = header.parentElement;
  const content = item.querySelector(".accordion-content");
  const allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach(i => {
    if (i !== item) i.classList.remove("active");
  });

  item.classList.toggle("active");
}



function toggleSubAccordion(button) {
  const subContent = button.nextElementSibling;
  subContent.style.display = subContent.style.display === "block" ? "none" : "block";
}
