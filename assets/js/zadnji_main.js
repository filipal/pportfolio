


// ***************************************************            BURGER SERVICES MOBILE MENU         ***************************************************/
const menuHeader = document.querySelector(".header__mobile");
const sectionFirst = document.querySelector("section");

if (window.innerWidth < 768) {
  bufButton = "-118px";
  // gsap.to(menuHeader, {
  //   top: 0,
  //   scrollTrigger: {
  //     trigger: sectionFirst,
  //     start: "top 10%",
  //     end: "top 20%",
  //     scrub: 1,
  //   },
  // });
  console.log(1);
} else {
  bufButton = "-140px";
}

// ***************************************************            BURGER SERVICES DESK MENU         ***************************************************/

const burgerServices = document.querySelector(".burger_services");
const sevicesBtn = document.querySelector(".sevicesBtn");
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

var header = document.querySelector(".header");
var logoHeader = header.querySelector(".logo");
var navbarHeight = header.offsetHeight;
var lastScrollTop = 0;

window.onscroll = function () {
  scrollHide();
};


function scrollHide() {
  var st = window.pageYOffset || document.documentElement.scrollTop;

  if (window.innerWidth < 500) {
    if (st > lastScrollTop) {
      header.classList.add("nav-up");
    } else {
      header.classList.remove("nav-up");
    }
  }

  logoHeader.classList.add("small");
  sevicesBtn.classList.remove("active");
  burgerServices.classList.remove("active");
  if (window.scrollY == 0) {
    logoHeader.classList.remove("small");
  }
  lastScrollTop = st <= 0 ? 0 : st;
}

// ***************************************************            BURGER MENU         ***************************************************/
const menuBtn = document.querySelector(".menu");
const menuBurger = document.querySelector(".burger");
const header__mobile = document.querySelector(".header__mobile");
const menuBurgerBg = document.querySelector(".burger__bg");
const menuItems = document.querySelectorAll(".burger__item");
const menuBurgerInner = document.querySelector(".burger__inner");
const body = document.querySelector(".body");

const tl = gsap.timeline({ paused: true });
tl.to(
  header__mobile,
  {
    opacity: 1,
    duration: 0.2,
  },
  0
)
  .to(
    menuBurger,
    {
      top: 0,
      opacity: 1,
      duration: 1.2,
      ease: "power4.out",
    },
    0.3
  )
  .to(
    menuBurgerBg,
    {
      top: 0,
      duration: 1.2,
      ease: "power4.out",
    },
    0
  )
  .from(
    menuItems,
    {
      opacity: 0,
      scale: 0.7,

      duration: 0.7,
      ease: "power4.out",
    },
    0.7
  );

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

// ***************************************************             CF7 BUTTON           ***************************************************/
// Find all buttons with class .cf7btn
var cf7Buttons = document.querySelectorAll(".cf7btn");

// We go through each button found
cf7Buttons.forEach(function (cf7Button) {
  // Create a new button
  var newButton = document.createElement("button");
  newButton.className =
    "btn btn-hover wpcf7-form-control wpcf7-submit has-spinner";
  newButton.type = "submit";

  // Create the content of the new button
  var buttonContent = document.createElement("div");
  buttonContent.className = "btn__wrap btn-hover";

  var paragraph = document.createElement("p");
  paragraph.textContent = "send out";

  var innerDiv = document.createElement("div");
  innerDiv.className = "btn__inner";

  var img = document.createElement("img");
  img.src = img.src = "/assets/images/btn-arrow.svg";
  img.alt = "";

  // Assembling the structure of a new button
  innerDiv.appendChild(img);
  buttonContent.appendChild(paragraph);
  buttonContent.appendChild(innerDiv);
  newButton.appendChild(buttonContent);

  //We replace the old button with a new one
  cf7Button.parentNode.replaceChild(newButton, cf7Button);
});

// ***************************************************            CUSTOM CURSOR         ***************************************************/
gsap.set(".ball", { xPercent: -50, yPercent: -50 });
gsap.set(".cursor", { xPercent: -50, yPercent: -50 });

let xTo = gsap.quickTo(".ball", "x", { duration: 0.000001 }),
  yTo = gsap.quickTo(".ball", "y", { duration: 0.000001 });

let xToCurs = gsap.quickTo(".cursor", "x", { duration: 0.000001 }),
  yToCurs = gsap.quickTo(".cursor", "y", { duration: 0.000001 });

window.addEventListener("mousemove", (e) => {
  xTo(e.clientX);
  yTo(e.clientY);
  xToCurs(e.clientX);
  yToCurs(e.clientY);
});
var allLinks = Array.from(document.querySelectorAll("a"));

// We collect all the buttons on the page
var allButtons = Array.from(document.querySelectorAll("button"));

// We collect all the input fields on the page
var allInputFields = Array.from(document.querySelectorAll("input"));

// We collect all text areas on the page
var allTextAreas = Array.from(document.querySelectorAll("textarea"));

var allClasses = Array.from(document.querySelectorAll(".btn-hover"));

// Combine all elements into one array
var hoverElements = allLinks.concat(
  allButtons,
  allInputFields,
  allTextAreas,
  allClasses
);

const ball = document.querySelector(".ball");
const cursor = document.querySelector(".cursor");

let bufScale;
hoverElements.forEach((hoverElement) => {
  hoverElement.addEventListener("mouseover", () => {
    gsap.to(ball, {
      scale: 3,
      backgroundColor: "#ebedec",
      opacity: 0.3,
      ease: "power3.out",
      duration: 1,
    });
  });
  hoverElement.addEventListener("mouseout", () => {
    gsap.to(ball, {
      scale: 1,
      ease: "power3.out",
      backgroundColor: "transparent",
      opacity: 1,
      duration: 1,
    });
  });
});

// ***************************************************             TITLE ANIMA           ***************************************************/
gsap.utils.toArray(".title").forEach((title, index) => {
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
        const progress = self.progress;
        title.style.opacity = progress;
      },
    },
  });
});

// ***************************************************             HEADER ANIMA           ***************************************************/
function headerAnima(delay) {
  gsap.from(".gsap_anima", {
    opacity: 0,
    y: -40,
    duration: 0.6,
    delay: delay / 2.5,
    stagger: 0.2,
  });
}
// ***************************************************             POPUP           ***************************************************/

const openPopup = document.querySelectorAll(".openPopup");
const closePopup = document.querySelector(".closePopup");
const popup = document.querySelector(".popup");
const popupInner = document.querySelector(".popup");

let isPopup = false;

openPopup.forEach((btn) => {
  btn.addEventListener("click", () => {
    popup.classList.add("active");
    body.classList.add("lock");
  });
});
closePopup.addEventListener("click", () => {
  popup.classList.remove("active");
  body.classList.remove("lock");
});

popup.addEventListener("click", (event) => {
  if (event.target == popupInner) {
    console.log(1);
    popup.classList.remove("active");
    body.classList.remove("lock");
  }
  console.log(2);
});

/***************************************************              HOVER BUTTON            ***************************************************/
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

    gsap.to(btnText, { right: -60, duration: 0.5 });
  });
  elem.addEventListener("mouseleave", () => {
    const btnText = elem.querySelector("p");
    const btnInner = elem.querySelector(".btn__inner");
    const btnInnerImg = btnInner.querySelector("img");
    btnInnerImg.src = "/assets/images/btn-arrow.svg";
    gsap.to(btnInner, { left: 0, backgroundColor: "#282828", duration: 0.5 });
    btnInner.classList.remove("mix");
    gsap.to(btnText, { right: -0, duration: 0.5 });
  });
});

/***************************************************              FORM VALIDAION            ***************************************************/
// Mask for the form
const letterArr = document.querySelectorAll(".letters");
const numberArr = document.querySelectorAll(".numbers");

function validateNumberInputs(inputsArr) {
  inputsArr.forEach((inputZip) => {
    let regExpMask = IMask(inputZip, {
      //   mask: "+{38}(000)000-00-00",
      mask: Number,
    });
  });
}
function validateLettersInputs(inputsArr) {
  inputsArr.forEach((inputZip) => {
    let regExpMask = IMask(inputZip, {
      //   mask: /^[a-zA-Z]+$/,
      mask: /^[a-zA-Z-a-яА-Я]+$/,
    });
  });
}
validateLettersInputs(letterArr);
validateNumberInputs(numberArr);

// /***************************************************              LINKS            ***************************************************/

// const header__desktop = document.querySelector(".header__desktop");
// const headerDesktopLinks = header__desktop.querySelectorAll("a");

// headerDesktopLinks.forEach((elem) => {
//   console.log(window.location.href);
//   if (elem.href == window.location.href) {
//     elem.style.color = "#ff3d00";
//   }
// });

// ***************************************************             OTHER           ***************************************************/

// Resetira scroll na vrh pri refresh-u
window.onbeforeunload = function () {
  window.scrollTo(0, 0);
};

// Omogućava prirodno ponašanje za povratak na prethodnu stranicu
if ('scrollRestoration' in history) {
  history.scrollRestoration = 'auto';
}


// Inicijalizacija Bootstrap karusela s autoplay opcijom
const carouselContainer = document.querySelector('.bootstrap-carousel-scope #carouselExampleDark');
if (carouselContainer) {
  const carousel = new bootstrap.Carousel(carouselContainer, {
    interval: 3000, // Automatska promjena svakih 3 sekunde
    ride: 'carousel',
    pause: 'hover',
  });
}


function scrollToSection(event, sectionId) {
  // Sprječava klik ako je kliknuto unutar accordiona
  if (event.target.closest(".accordion")) {
      event.stopPropagation();
      return;
  }
  
  // Pomicanje na sekciju
  document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
}

function toggleAccordion(header) {
  let item = header.parentElement;
  let allItems = document.querySelectorAll(".accordion-item");

  allItems.forEach(i => {
    if (i !== item) i.classList.remove("active");
  });

  item.classList.toggle("active");
}

function toggleSubAccordion(button) {
  let subContent = button.nextElementSibling;
  subContent.style.display = subContent.style.display === "block" ? "none" : "block";
}

const swiperGallery = new Swiper(".gallery__slider1", {
  slidesPerView: "auto",
  spaceBetween: 20,
  freeMode: true,
  grabCursor: true,
  mousewheel: true,
});

// Selektujemo slider

document.addEventListener("DOMContentLoaded", function () {
  var swiper = new Swiper(".gallery__slider1", {
    slidesPerView: "auto",
    spaceBetween: 20,
    freeMode: false, // ❌ Sprečava slobodno pomeranje
    allowTouchMove: true, // ✅ Omogućava prevlačenje rukom
    simulateTouch: true, // ✅ Dozvoljava prevlačenje i na desktopu
    grabCursor: true, // ✅ Dodaje ruku kao kursor

    mousewheel: {
      enabled: false, // ❌ Blokira skrolovanje mišem unutar Swiper-a
    },
  });

  // 🚀 **Preusmeravanje scroll eventa na `window`**
  document.querySelector(".gallery__slider1").addEventListener("wheel", function (e) {
    console.log("🛑 Swiper scroll blokiran, preusmeravam na prozor!");
    e.preventDefault(); // Blokiraj Swiper
    window.scrollBy(0, e.deltaY); // Umesto toga, skrolaj stranicu
  }, { passive: false });
});


document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".mySwiper .swiper-slide img");

  // Kreiraj overlay za prikaz slike
  const zoomContainer = document.createElement("div");
  zoomContainer.classList.add("zoomed-img-container", "hidden");

  const zoomedImage = document.createElement("img");
  zoomContainer.appendChild(zoomedImage);
  document.body.appendChild(zoomContainer);

  images.forEach((img) => {
    img.addEventListener("click", function () {
      zoomedImage.src = this.src; // Postavlja kliknutu sliku u overlay
      zoomContainer.classList.remove("hidden");
    });
  });

  // Zatvaranje klikom na overlay
  zoomContainer.addEventListener("click", function () {
    zoomContainer.classList.add("hidden");
  });
});


document.querySelectorAll(".sketch img").forEach(img => {
  img.addEventListener("click", function() {
      let overlay = document.createElement("div");
      overlay.classList.add("lightbox");
      overlay.innerHTML = `<img src="${this.src}" alt="${this.alt}">`;
      document.body.appendChild(overlay);

      overlay.addEventListener("click", () => {
          overlay.remove();
      });
  });
});

var model = new Swiper(".gallery__model1", {
  loop: true,
  speed: 600,
  slidesPerView: 2.5,
  spaceBetween: 20,
  centeredSlides: true,
  navigation: {
      nextEl: ".model-next", 
      prevEl: ".model-prev"
  },
  breakpoints: {
      375: {
          slidesPerView: 1.2,
          centeredSlides: false,
      },
      500: {
          slidesPerView: 2,
      },
      788: { 
          slidesPerView: 2, 
          spaceBetween: 20 
      },
      1200: {
          slidesPerView: 2.5,
          spaceBetween: 20,
          centeredSlides: false,
      },
      1930: {
          slidesPerView: "auto",
          spaceBetween: 20,
          centeredSlides: false,
      },
  },
});
