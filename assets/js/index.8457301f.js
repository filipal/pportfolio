import {S as e, A as s, N as t, P as r} from "./vendor.4ea4e284.js";
!function() {
    const e = document.createElement("link").relList;
    if (!(e && e.supports && e.supports("modulepreload"))) {
        for (const e of document.querySelectorAll('link[rel="modulepreload"]'))
            s(e);
        new MutationObserver((e => {
            for (const t of e)
                if ("childList" === t.type)
                    for (const e of t.addedNodes)
                        "LINK" === e.tagName && "modulepreload" === e.rel && s(e)
        }
        )).observe(document, {
            childList: !0,
            subtree: !0
        })
    }
    function s(e) {
        if (e.ep)
            return;
        e.ep = !0;
        const s = function(e) {
            const s = {};
            return e.integrity && (s.integrity = e.integrity),
            e.referrerpolicy && (s.referrerPolicy = e.referrerpolicy),
            "use-credentials" === e.crossorigin ? s.credentials = "include" : "anonymous" === e.crossorigin ? s.credentials = "omit" : s.credentials = "same-origin",
            s
        }(e);
        fetch(e.href, s)
    }
}();
new e(".swiper",{
    modules: [s, t, r, function({swiper: e, on: s, extendParams: t}) {
        t({
            carouselEffect: {
                opacityStep: .33,
                scaleStep: .2,
                sideSlides: 2
            }
        }),
        s("beforeInit", ( () => {
            if ("carousel" !== e.params.effect)
                return;
            e.classNames.push(`${e.params.containerModifierClass}carousel`);
            const s = {
                watchSlidesProgress: !0,
                centeredSlides: !0
            };
            Object.assign(e.params, s),
            Object.assign(e.originalParams, s)
        }
        )),
        s("progress", ( () => {
            if ("carousel" !== e.params.effect)
                return;
            const {scaleStep: s, opacityStep: t} = e.params.carouselEffect
              , r = Math.max(Math.min(e.params.carouselEffect.sideSlides, 3), 1)
              , a = {
                1: 2,
                2: 1,
                3: .2
            }[r]
              , o = {
                1: 50,
                2: 50,
                3: 67
            }[r]
              , i = e.slides.length;
            for (let l = 0; l < e.slides.length; l += 1) {
                const n = e.slides[l]
                  , c = e.slides[l].progress
                  , p = Math.abs(c);
                let d = 1;
                p > 1 && (d = .3 * (p - 1) * a + 1);
                const u = n.querySelectorAll(".swiper-carousel-animate-opacity")
                  , f = c * d * o * (e.rtlTranslate ? -1 : 1) + "%"
                  , m = 1 - p * s
                  , y = i - Math.abs(Math.round(c));
                n.style.transform = `translateX(${f}) scale(${m})`,
                n.style.zIndex = y,
                n.style.opacity = p > r + 1 ? 0 : 1,
                u.forEach((e => {
                    e.style.opacity = 1 - p * t
                }
                ))
            }
        }
        )),
        s("resize", ( () => {
            e.virtual && e.params.virtual && e.params.virtual.enabled && requestAnimationFrame(( () => {
                e.destroyed || (e.updateSlides(),
                e.updateProgress())
            }
            ))
        }
        )),
        s("setTransition", ( (s, t) => {
            if ("carousel" === e.params.effect)
                for (let r = 0; r < e.slides.length; r += 1) {
                    const s = e.slides[r]
                      , a = s.querySelectorAll(".swiper-carousel-animate-opacity");
                    s.style.transitionDuration = `${t}ms`,
                    a.forEach((e => {
                        e.style.transitionDuration = `${t}ms`
                    }
                    ))
                }
        }
        ))
    }
    ],
    effect: "carousel",
    carouselEffect: {
        opacityStep: .33,
        scaleStep: .2,
        sideSlides: 2
    },
    grabCursor: !0,
    loop: !0,
    loopAdditionalSlides: 1,
    slidesPerView: "auto",
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    },
    pagination: {
        el: ".swiper-pagination"
    },
    autoplay: {
        delay: 3e3
    }
});
