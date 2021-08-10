// const tl = gsap.timeline({
//     onComplete: () => {
//     },
//   });
 

  window.addEventListener("DOMContentLoaded", () => {
      setTimeout(()=>{
      document.querySelector("#loader-load ").style.opacity = 0;
      try{
        AOS.init();
    }
    catch(err){}
    //   document.querySelector("#loader-load ").style.visibility = "hidden";
      },500)
    // PARALLAX EFFECT


    function parallax(parent) {
      let element;
      return function ({ speed, elem, offset }) {
        speed = 2;
        offset = 3;
        document.querySelectorAll(parent).forEach((p) => {
          p.addEventListener("mousemove", (event) => {
            element = document.querySelectorAll(elem);
            element.forEach((el, i) => {
              const _y =
                (window.innerHeight - event.pageY * (i / 4) - offset) / 100;
              const _x =
                (window.innerWidth - event.pageX * (i / speed) - offset) /
                100;
              el.style.transform = `translateX(${_x}px) translateY(${_y}px)`;
            });
          });
        });
      };
    }

    parallax("#banner")({ elem: "#banner .parallax-layer" });
    parallax(".how-it-works ")({ elem: ".how-it-works  .parallax-layer" });

    // FAQ TABS

    const faq_S = document.querySelectorAll(".faq");

    faq_S.forEach((faq) => {
      faq.addEventListener("click", function () {
        this.classList.toggle("active");
        const _icon = this.querySelector(".icon");
        if (this.className.includes("active")) {
          _icon.classList.replace("fa-plus", "fa-minus");
        } else {
          _icon.classList.replace("fa-minus", "fa-plus");
        }
      });
    });

    // HAMBURGER

    const header = document.querySelector("#header");
    const navLinksBg = header.querySelector(".blur-nav-bg");
    const hamburger = header.querySelector(".hamburger");
    function menuToggler() {
      header.querySelector(".header__nav-links").classList.toggle("active");
      hamburger.classList.toggle("change");
      navLinksBg.classList.toggle("active");
    }

    hamburger.addEventListener("click", menuToggler);
    navLinksBg.addEventListener("click", menuToggler);
  });