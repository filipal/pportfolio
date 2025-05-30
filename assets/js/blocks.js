// ***************************************************             BLOCK PORTFOLIO           ***************************************************/
if (document.querySelector(".portfolio") && document.querySelector(".portfolio__item")) {
  console.log("PORTFOLIO");
  gsap.from(".portfolio__item", {
    opacity: 0,
    scale: 0.9,
    duration: 2,
    ease: "power2.inOut",
    stagger: 0.6,
    scrollTrigger: {
      trigger: ".portfolio",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });
}

//***************************************************           BLOCK REVIEWS           *********************************************/
/* BLOCK REVIEWS */
if (document.querySelector(".reviews")) {
  console.log("REVIEWS");
  var swiper = new Swiper(".reviews__slider", {
    loop: true,
    speed: 600,
    navigation: {
      nextEl: ".review__next",
      prevEl: ".review__prew",
    },
  });

  gsap.from(".reviews__item-right > p", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".reviews",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });
}

// ***************************************************           BLOCK SERVICES           ***************************************************/
if (document.querySelector(".services")) {
  console.log("SERVICES");
  gsap.from(".services__text", {
    opacity: 0,
    duration: 1.5,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".services__text",
      start: "top 90%",
      end: "top 40%",
      scrub: 1,
    },
  });
  /***************************************************          BLOCK SERVICES HORIZONTAL SCROLL             ***************************************************/
  gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
  let navItems = document.querySelectorAll(".services__nav-item");
  let navItemsNumber = document.querySelectorAll(".services__subtitle");
  let panelsSection = document.querySelector(".services__wrap");
  let panelsContainer = document.querySelector(".services__content"),
    tween;

  let str1;
  if (window.innerWidth < 490) {
    str1 = "top top";
  } else {
    str1 = "top -3% top";
  }

  const panels = gsap.utils.toArray(".services__item");

  if (window.innerWidth > 800) {
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      duration: 0.2,
      scrollTrigger: {
        trigger: ".services",
        pin: true,
        start: str1,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          // inertia: false,
          duration: { min: 0.1, max: 0.3 },
          // delay: 0,
          // duration: 0.1,
          delay: 0.1,
          ease: "power1.inOut",
        },
        onUpdate: (self) => {
          const progress = self.progress;
          const sectionIndex = Math.round(progress * (panels.length - 1));

          navItems.forEach((elem) => {
            elem.classList.remove("active");
          });
          navItems[sectionIndex].classList.add("active");

          panels.forEach((elem) => {
            elem.classList.remove("active");
          });
          panels[sectionIndex].classList.add("active");
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth * 2),
      },
    });
  } else {
    tween = gsap.to(panels, {
      xPercent: -100 * (panels.length - 1),
      ease: "none",
      duration: 0.5,
      scrollTrigger: {
        trigger: ".services",
        pin: true,
        start: str1,
        scrub: 1,
        onUpdate: (self) => {
          const progress = self.progress;
          const sectionIndex = Math.round(progress * (panels.length - 1));

          navItems.forEach((elem) => {
            elem.classList.remove("active");
          });
          navItems[sectionIndex].classList.add("active");

          panels.forEach((elem) => {
            elem.classList.remove("active");
          });
          panels[sectionIndex].classList.add("active");
        },
        end: () => "+=" + (panelsContainer.offsetWidth - innerWidth * 2),
      },
    });
  }
}

/***************************************************            BLOCK PARTNERS            **********************************************/


/***************************************************            BLOCK STACK            ***************************************************/
if (document.querySelector(".stack")) {
  console.log("STACK");
  if (window.innerWidth < 650) {
    buf = 50;
  } else {
    buf = 100;
  }
  let tweenMain = gsap
    .to(".stack__list", {
      xPercent: -buf,
      repeat: -1,
      duration: 40,
      ease: "linear",
    })
    .totalProgress(0.5);
  gsap.set(".stack__list", { xPercent: 0 });
}

/***************************************************             CIRCLE SLIDER            ***************************************************/
/* CIRCLE SLIDER */
if (document.querySelector(".carousel")) {
  console.log("CIRCLE");
  var swiper = new Swiper(".carouselSlider", {
    effect: "cards",
    loop: true,
    grabCursor: true,
    navigation: {
      nextEl: ".next",
      prevEl: ".prev",
    },
    cardsEffect: {
      perSlideOffset: 20, // Space between cards in px
      perSlideRotate: 1, // Rotation of cards in degrees
    },
  });
}

// ***************************************************            BLOCK ABOUTUS            ***************************************************/
if (document.querySelector(".about")) {
  console.log("ABOUTUS");
  gsap.from(".about__text", {
    opacity: 0,
    y: 40,
    duration: 1.2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about",
      start: "top 60%",
      end: "top 20%",
      scrub: 1,
    },
  });

  gsap.from(".about__bg", {
    opacity: 0,
    x: 70,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about",
      start: "top 40%",
      end: "top 5%",
    },
  });
  gsap.from(".about__left > img:nth-child(1)", {
    opacity: 0,
    y: 50,
    duration: 2,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".about",
      start: "top 40%",
      end: "top 5%",
    },
  });
}

// ***************************************************            BLOCK NEWS           ***************************************************/


// ***************************************************           BLOCK HOME-HERO            ***************************************************/
if (document.querySelector(".hero")) {
  console.log("HOME-HERO");
  gsap.to(".hero__content-1 > p", {
    opacity: 1,
    duration: 3,
    delay: 0.7,
  });
  gsap.to(".hero__content-2", {
    opacity: 1,
    duration: 3,
    delay: 0.7,
  });
  gsap.to(".hero__content-3", {
    opacity: 1,
    duration: 2,
    delay: 0.3,
  });
  headerAnima(1);

  //play video or foto
  function get_name_browser() {
    var ua = navigator.userAgent;

    if (ua.search(/Safari/) > 0 && ua.search(/Chrome/) === -1) {
      console.log(ua);
      return true;
    }
    return false;
  }

  if (get_name_browser()) {
    // alert(navigator.userAgent);
    document.querySelector(".hero__bg-img").style.display = "block";
    document.querySelector(".hero__bg-video").style.display = "none";
  }
}

// ***************************************************            BLOCK GAME-HERO          ***************************************************/
if (document.querySelector(".hero-game")) {
  console.log("GAME-HERO");

  let tweenMain = gsap
    .to(".game_line__item1", {
      xPercent: -100,
      repeat: -1,
      duration: 38,
      ease: "linear",
    })
    .totalProgress(0.5);
  gsap.set(".game_line__item1", { xPercent: 0 });

  headerAnima(1);
}
// ***************************************************           BLOCK YOU-GET           ***************************************************/
if (document.querySelector(".you-get")) {
  console.log("YOU-GET");

  const yougetBtn = document.querySelectorAll(".you-get__item");
  const yougetImg = document.querySelectorAll(".you-get__img");

  gsap.from(".you-get__right", {
    x: 70,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".you-get",
      start: "top 80%",
      end: "top -10%",
      scrub: 1,
    },
  });
  gsap.from(".you-get__left", {
    x: -70,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".you-get",
      start: "top 80%",
      end: "top -10%",
      scrub: 1,
    },
  });

  yougetBtn.forEach((elem, index) => {
    elem.addEventListener("mouseenter", () => {
      yougetBtn.forEach((elem) => {
        elem.classList.remove("active");
      });
      yougetImg.forEach((elem) => {
        gsap.to(elem, {
          y: 0,
          opacity: 0,
        });
      });
      elem.classList.add("active");

      gsap.fromTo(
        yougetImg[index],
        { y: 70 },
        {
          scale: 1,
          y: 0,
          opacity: 1,
        }
      );
    });
  });
}
//***************************************************           BLOCK DEVELOP           ***************************************************/
if (document.querySelector(".develop")) {
  console.log("DEVELOP");

  gsap.from(".develop__button", {
    y: 40,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.4,
    scrollTrigger: {
      trigger: ".develop",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
    },
  });

  const developBtn = document.querySelectorAll(".develop__button");
  const developContents = document.querySelectorAll(".develop__content");

  developBtn.forEach((elem, index) => {
    elem.addEventListener("mouseenter", () => {
      developBtn.forEach((elem) => {
        elem.classList.remove("active");
      });
      elem.classList.add("active");

      developContents.forEach((elem) => {
        elem.classList.remove("active");
      });
      developContents[index].classList.add("active");
    });
  });
}
//***************************************************           BLOCK TEAM           ***************************************************/
if (document.querySelector(".team")) {
  console.log("TEAM");
  gsap.from(".team__item", {
    scale: 0.9,
    opacity: 0,
    ease: "power2.inOut",
    stagger: 0.1,
    duration: 1,
    scrollTrigger: {
      trigger: ".team",
      start: "top 90%",
      end: "top 10%",
    },
  });
  gsap.from(".team__grafiri > .grey", {
    x: 60,
    opacity: 0,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".team",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
    },
  });
  gsap.from(".team__grafiri > .stroke", {
    opacity: 0,
    y: 40,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".team",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
// ***************************************************           BLOCK AREAS           ***************************************************/
if (document.querySelector(".areas")) {
  console.log("AREAS");
  gsap.from(".areas__text", {
    opacity: 0,
    y: 40,
    x: 20,
    stagger: 0.1,
    ease: "power2.inOut",
    scrollTrigger: {
      trigger: ".areas",
      start: "top 60%",
      end: "top 10%",
      scrub: 1,
    },
  });
}
// ***************************************************           BLOCK HERO-ABOUT           ***************************************************/
if (document.querySelector(".hero-about")) {
  console.log("HERO-ABOUT");

  gsap.from(".hero-about__text", {
    opacity: 0,
    duration: 4,
    delay: 0.5,
  });
  gsap.from(".hero-about__descrip", {
    opacity: 0,
    y: 20,
    duration: 1,
    delay: 0.5,
  });
  headerAnima(1.2);
}
// ***************************************************           BLOCK HERO-PORTFOLIO           ***************************************************/
if (document.querySelector(".hero-portfolio")) {
  console.log("HERO-PORTFOLIO");

  const textEl = document.querySelector(".hero-portfolio__text");
  if (textEl) {
    gsap.from(textEl, {
      x: 40,
      opacity: 0,
      duration: 1.5,
      delay: 0.5,
    });
  }

  headerAnima(1);
}

// ***************************************************           BLOCK GALLERY           ***************************************************/
if (document.querySelector(".gallery")) {
  console.log("GALLERY");

  const btns = document.querySelectorAll(".tab__btn");
  btns.forEach((btn, index) => {
    if (index >= 2) {
      gsap.from(btn, {
        opacity: 0,
        x: 50,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: btn,
          start: "top 80%",
          end: "top 40%",
          scrub: 1,
        },
      });
    }
  });

  const galleryWrap = document.querySelectorAll(".gallery");
  const videoSwipers = new Map();
  let requestedVideoToPlay = null;

  galleryWrap.forEach((elem) => {
    const tabBtn = elem.querySelectorAll(".tab__btn");
    const tabSliders = elem.querySelectorAll(".gallery__slider");

    tabBtn.forEach((btn, index) => {
      btn.addEventListener("click", () => {
        tabBtn.forEach((el) => el.classList.remove("active"));
        tabSliders.forEach((el) => el.classList.remove("active"));
        btn.classList.add("active");
        tabSliders[index].classList.add("active");

        const activeSlider = tabSliders[index];
        if (!videoSwipers.has(activeSlider)) {
          const sliderClass = activeSlider.classList.contains("gallery__slider1")
            ? ".gallery__slider1"
            : ".gallery__slider2";

          const swiper = new Swiper(activeSlider, {
            loop: true,
            speed: 600,
            slidesPerView: 2.5,
            spaceBetween: 10,
            centeredSlides: true,
            navigation: {
              nextEl: sliderClass === ".gallery__slider1" ? ".portolio__next1" : ".portolio__next2",
              prevEl: sliderClass === ".gallery__slider1" ? ".portolio__prew1" : ".portolio__prew2",
            },
            breakpoints: {
              375: { slidesPerView: 1.2, centeredSlides: false },
              500: { slidesPerView: 2 },
              788: { slidesPerView: 2, spaceBetween: 20 },
              1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
              1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
            },
            on: {
              slideChangeTransitionEnd: function () {
                if (requestedVideoToPlay) {
                  const activeSlide = this.slides[this.activeIndex];
                  if (activeSlide.contains(requestedVideoToPlay)) {
                    requestedVideoToPlay.play();
                    requestedVideoToPlay = null;
                  }
                }
              },
            },
          });

          videoSwipers.set(activeSlider, swiper);
        }
      });
    });
  });

  // Slike slideri odmah
  new Swiper(".gallery__slider1.active", {
    loop: true,
    speed: 600,
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".portolio__next1",
      prevEl: ".portolio__prew1",
    },
    breakpoints: {
      375: { slidesPerView: 1.2, centeredSlides: false },
      500: { slidesPerView: 2 },
      788: { slidesPerView: 2, spaceBetween: 20 },
      1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
      1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    },
  });

  new Swiper(".gallery__slider2.active", {
    loop: true,
    speed: 600,
    slidesPerView: 2.5,
    spaceBetween: 10,
    centeredSlides: true,
    navigation: {
      nextEl: ".portolio__next2",
      prevEl: ".portolio__prew2",
    },
    breakpoints: {
      375: { slidesPerView: 1.2, centeredSlides: false },
      500: { slidesPerView: 2 },
      788: { slidesPerView: 2, spaceBetween: 20 },
      1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
      1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    },
  });

  const galleryItems = document.querySelectorAll(".gallery__item");
  const galleryBig = document.querySelector(".gallery__big");
  const galleryBigImg = document.querySelector(".gallery__big > img");

  galleryItems.forEach((elem) => {
    elem.addEventListener("click", (e) => {
      const clickedImg = e.target.closest("img");
      if (clickedImg) {
        galleryBig.classList.add("active");
        galleryBigImg.src = clickedImg.src;
      }
    });
  });

  galleryBig.addEventListener("click", () => {
    galleryBig.classList.remove("active");
  });

  const videos = document.querySelectorAll(".gallery__slider video");
  videos.forEach((video) => {
    video.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault(); // sprječava nepredvidivo ponašanje klikom

      // Ako je korisnik kliknuo direktno na video element
      if (e.target === video) {
        video.play().catch((err) => {
          console.warn("Video play failed:", err);
        });
      }
    });

    // Spriječi Swiper da klik tumači kao swipe
    video.addEventListener("touchstart", (e) => e.stopPropagation());
    video.addEventListener("mousedown", (e) => e.stopPropagation());
  });
  }



// ***************************************************           BLOCK HERO-CONTACT           ***************************************************/
if (document.querySelector(".hero-contact")) {
  console.log("HERO-CONTACT");
  gsap.from(".contact__item", {
    y: -30,
    x: 20,
    opacity: 0,
    duration: 1.2,
    delay: 0.5,
    stagger: 0.2,
  });
  headerAnima(1);
}
// ***************************************************             BLOCK PROJECT           ***************************************************/
if (document.querySelector(".project")) {
  console.log("PROJECT");

  const projectItems = document.querySelectorAll(".project__item");
  projectItems.forEach((btn) => {
    gsap.from(btn, {
      opacity: 0,
      scale: 0.95,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: btn,
        start: "top 80%",
        end: "top 40%",
        scrub: 1,
      },
    });
  });
}

//***************************************************           CHANGE IMAGE SERVICES           ***************************************************/
document.addEventListener("DOMContentLoaded", () => {
  console.log("✅ DOM je učitan, pokrećem skripte...");

  // 📌 Inicijalizacija Carousel Swipera
  if (document.querySelector(".carouselSwiper")) {
    console.log("✅ Pokrećem Carousel Swiper...");
    new Swiper(".carouselSwiper", {
      loop: true,
      speed: 600,
      slidesPerView: 1,
      spaceBetween: 20,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      pagination: {
        el: ".carouselSwiper .swiper-pagination", // ✅ Specifičan selektor
        clickable: true,
      },
    });
  }
  document.querySelectorAll(".swiper-slide").forEach(slide => {
    slide.style.transform = "none";  // ✅ Reset transformacija
});

  // 📌 Inicijalizacija Coverflow Swipera
  const swiperElements = document.querySelectorAll(".mySwiper");
  if (swiperElements.length) {
    swiperElements.forEach((swiperElement, index) => {
      console.log(`✅ Pokrećem Coverflow Swiper #${index + 1}...`);

      const mySwiper = new Swiper(swiperElement, {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        loop: true,
        loopAdditionalSlides: 3,
        watchSlidesProgress: true,
        coverflowEffect: {
          rotate: 50,
          stretch: 0,
          depth: 200,
          modifier: 1,
          slideShadows: true,
        },
        pagination: {
          el: swiperElement.querySelector(".swiper-pagination"),
          clickable: true,
        },
      });

      gsap.set(swiperElement.querySelectorAll(".swiper-slide"), { clearProps: "transform" });
      console.log(`✅ Swiper #${index + 1} inicijaliziran:`, mySwiper);
    });
  } else {
    console.warn("⚠️ Nema .mySwiper elemenata za inicijalizaciju.");
  }

  // 📌 Provjera i inicijalizacija REDIRECT sekcije
  if (document.querySelector(".redirect")) {
    console.log("🔍 Redirect sekcija pronađena.");
    const fotos = [
      "pages/wp-content/uploads/2024/02/game-art-scaled.jpg",
      "pages/wp-content/uploads/2024/02/porting-scaled.jpg",
      "pages/wp-content/uploads/2024/02/anima-vfx.png",
      "pages/wp-content/uploads/2024/02/staff-scaled.jpg",
      "pages/wp-content/uploads/2024/02/testing.jpg",
      "pages/wp-content/uploads/2024/02/game-dev-scaled.jpg",
    ];

    const items = document.querySelectorAll(".redirect__item");
    items.forEach((elem) => {
      let buf = elem.querySelector(".redirect__item-bottom").innerHTML;

      if (buf == "Game Porting") {
        elem.style.order = "6";
        elem.querySelector(".redirect__item-bg > img").src = fotos[1];
      } else if (buf == "Game Testing") {
        elem.style.order = "5";
        elem.querySelector(".redirect__item-bg > img").src = fotos[4];
      } else if (buf == "Staff Augmentation") {
        elem.style.order = "4";
        elem.querySelector(".redirect__item-bg > img").src = fotos[3];
      } else if (buf == "Animation &amp; VFX") {
        elem.style.order = "3";
        elem.querySelector(".redirect__item-bg > img").src = fotos[2];
      } else if (buf == "Game Development") {
        elem.style.order = "2";
        elem.querySelector(".redirect__item-bg > img").src = fotos[5];
      } else {
        elem.style.order = "1";
        elem.querySelector(".redirect__item-bg > img").src = fotos[0];
      }
    });
  } else {
    console.warn("⚠️ Redirect sekcija nije pronađena.");
  }

  // 📌 SWIPER – Inicijalizacija svih Swiper instanci
  if (typeof Swiper !== "undefined") {
    console.log("✅ Swiper je učitan, pokrećem galerije...");

    // // 📌 GALLERY SLIDER 1
    // if (document.querySelector(".gallery__slider1")) {
    //   console.log("✅ Pokrećem gallery__slider1...");

    //   let gallerySwiper = new Swiper(".gallery__slider1", {
    //     loop: true,
    //     loopedSlides: 12,
    //     watchSlidesProgress: true,
    //     speed: 600,
    //     slidesPerView: 1,
    //     loopAdditionalSlides: 5,
    //     loopFillGroupWithBlank: true,
       
        
    //     loopedSlides: 6,
    //     spaceBetween: 20,
    //     centeredSlides: true,
    //     navigation: {
    //       nextEl: ".portolio__next1",
    //       prevEl: ".portolio__prew1",
    //     },
    //     breakpoints: {
    //       375: { slidesPerView: 1.2, centeredSlides: false },
    //       500: { slidesPerView: 2 },
    //       788: { slidesPerView: 2, spaceBetween: 20 },
    //       1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
    //       1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    //     },
    //   });
    //   console.log("✅ Swiper gallery__slider1 je inicijalizovan:", gallerySwiper);
    //   // 🔄 Reset loopa nakon inicijalizacije
    //   setTimeout(() => {
    //     gallerySwiper.loopDestroy();
    //     gallerySwiper.loopCreate();
    //     gallerySwiper.update();
    //     gallerySwiper.loopFix(); // ✅ Osigurava da duplikati budu pravilno postavljeni
    //     console.log("🔄 Loop resetovan za gallery__slider1");
    //   }, 500);
    // }
    // 📌 GALLERY SLIDER 2
    // if (document.querySelector(".gallery__slider2")) {
    //   new Swiper(".gallery__slider2", {
    //     loop: true,
    //     speed: 600,
    //     slidesPerView: 2.5,
    //     spaceBetween: 20,
    //     centeredSlides: true,
    //     navigation: {
    //       nextEl: ".portolio__next2",
    //       prevEl: ".portolio__prew2",
    //     },
    //     breakpoints: {
    //       375: { slidesPerView: 1.2, centeredSlides: false },
    //       500: { slidesPerView: 2 },
    //       788: { slidesPerView: 2, spaceBetween: 20 },
    //       1200: { slidesPerView: 2.5, spaceBetween: 20, centeredSlides: false },
    //       1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    //     },
    //   });
    // } else {
    //   console.warn("⚠️ .gallery__slider2 ne postoji na ovoj stranici.");
    // }

    // 📌 GALLERY SLIDER 3
    // if (document.querySelector(".gallery__slider3")) {
    //   new Swiper(".gallery__slider3", {
    //     loop: true,
    //     speed: 600,
    //     slidesPerView: "auto",
    //     spaceBetween: 20,
    //     centeredSlides: true,
    //     navigation: {
    //       nextEl: ".portolio__next3",
    //       prevEl: ".portolio__prew3",
    //     },
    //     breakpoints: {
    //       375: { slidesPerView: 1.2, centeredSlides: false },
    //       500: { slidesPerView: 1.2, centeredSlides: false },
    //       788: { slidesPerView: 2, spaceBetween: 20 },
    //       1200: { spaceBetween: 20, centeredSlides: false },
    //       1930: { slidesPerView: "auto", spaceBetween: 20, centeredSlides: false },
    //     },
    //   });
    // } else {
    //   console.warn("⚠️ .gallery__slider3 ne postoji na ovoj stranici.");
    // }
    // 📌 CIRCLE SLIDER
    if (document.querySelector(".carousel")) {
      console.log("CIRCLE");
      new Swiper(".carouselSlider", {
        effect: "cards",
        loop: true,
        grabCursor: true,
        navigation: {
          nextEl: ".next",
          prevEl: ".prev",
        },
        cardsEffect: {
          perSlideOffset: 20,
          perSlideRotate: 1,
        },
      });
    }

    // 📌 REVIEWS SLIDER
    if (document.querySelector(".reviews")) {
      console.log("REVIEWS");
      new Swiper(".reviews__slider", {
        loop: true,
        speed: 600,
        navigation: {
          nextEl: ".review__next",
          prevEl: ".review__prew",
        },
      });
    }
  
  // 📌 VERTICAL ULTIMATE 3D CAROUSEL
  if (document.getElementById("myDiv")) {
    console.log("🔍 Pronađen #myDiv, učitavam slider.css...");

    let link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "/assets/css/slider.css";
    document.head.appendChild(link);

    console.log("🎨 slider.css je uspešno dodat");

    if (typeof FWDVU3DCarUtils !== "undefined") {
      console.log("🚀 Pokrećem carousel...");
      FWDVU3DCarUtils.onReady(function () {
        new FWDVU3DCar({
          instanceName: "fwdvu3dcar0",
          carouselHolderDivId: "myDiv",
          carouselDataListDivId: "carouselData",
          displayType: "responsive",
          carouselHeight: 620,
          carouselOffsetWidth: 50,
          carouselOffsetHeight: 100,
          thumbnailWidth: 420,
          thumbnailHeight: 280,
          useDragAndSwipe: "yes",
          backgroundColor: "transparent",
          showScrollbar: "no",
          showNextAndPrevButtons: "no",
          showSlideshowButton: "no",
        });
      });
    } else {
      console.warn("⚠️ `FWDVU3DCarUtils` nije učitan, carousel se neće pokrenuti.");
    }
    } else {
      console.warn("⚠️ `#myDiv` ne postoji na ovoj stranici, carousel neće biti učitan.");
    }
  } else {
    console.error("❌ Swiper nije definisan! Provjeri da li je `swiper-bundle.min.js` učitan prije `blocks.js`.");
  }
  // 🔄 Reset Swipera posle učitavanja
  setTimeout(() => {
    document.querySelectorAll(".swiper").forEach(swiperEl => {
      let swiperInstance = swiperEl.swiper;
      if (swiperInstance) {
        swiperInstance.loopDestroy();
        swiperInstance.loopCreate();
        swiperInstance.update();
        console.log("🔄 Loop resetovan za:", swiperInstance);
      }
    });
  }, 1000); // Pauza za stabilnost
});


