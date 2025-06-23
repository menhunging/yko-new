addEventListener("scroll", (event) => {
  let currentScroll = $(window).scrollTop();

  if (currentScroll > 0) {
    $(".header").addClass("scroll");
  } else {
    $(".header").removeClass("scroll");
  }
});

$(document).ready(function () {
  if ($(".burger").length > 0) {
    let burger = $(".burger");
    let body = $("body");
    let menu = $(".menu");
    let close = $(".menu-close");

    close.on("click", function () {
      handleClick();
    });

    burger.on("click", function () {
      handleClick();
    });

    if ($(".menu__link").length > 0) {
      $(".menu__link").on("click", function (e) {
        e.preventDefault();
        let target = $($(this).attr("href"));

        if (menu.hasClass("opened")) {
          closeMenu();
        }

        if (target.length) {
          $("html, body").animate(
            {
              scrollTop: target.offset().top - 70,
            },
            500
          );
        }
      });
    }

    function handleClick() {
      if (burger.hasClass("opened")) {
        closeMenu();
      } else {
        burger.addClass("opened");
        menu.addClass("opened").slideDown();
        body.addClass("is-openMenu");
      }
    }

    function closeMenu() {
      burger.removeClass("opened");
      menu.removeClass("opened").slideUp();
      body.removeClass("is-openMenu");
    }

    // $(window).resize(function () {
    //   if (burger.hasClass("opened")) {
    //     $(window).width() >= 1200 && closeMenu();
    //   }
    // });
  }

  if ($(".our-villages__slider").length > 0) {
    const sliders = document.querySelectorAll(".our-villages__slider");
    let mySwipers = [];

    function sliderinit() {
      sliders.forEach((slider, index) => {
        let navNext = undefined;
        let navPrev = undefined;

        if (!slider.swiper) {
          navNext = $(slider).find(".swiperBtnNext")[0];
          navPrev = $(slider).find(".swiperBtnPrev")[0];

          mySwipers[index] = new Swiper(slider, {
            slidesPerView: 1,
            spaceBetween: 12,
            effect: "fade",
            fadeEffect: { crossFade: true },
            navigation: {
              nextEl: navNext && navNext,
              prevEl: navPrev && navPrev,
            },
          });
        } else {
          return;
        }
      });
    }

    sliders.length && sliderinit();
  }

  if ($(".thisYear").length > 0) {
    let date = new Date();
    $(".thisYear").text(date.getFullYear());
  }

  if ($(".houses-slider").length > 0) {
    const swiper = new Swiper(".houses-slider", {
      slidesPerView: 1,
      spaceBetween: 51,
      navigation: {
        prevEl: ".houses-slider .swiperBtnPrev",
        nextEl: ".houses-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        1550: {
          slidesPerView: 1,
          spaceBetween: 51,
        },
      },
    });
  }

  if ($(".houses__video").length > 0) {
    $(".houses__video .play").on("click", function () {
      const video = $(this).siblings("video").get(0);

      if (video.paused) {
        video.play();
      } else {
        video.pause();
      }
    });
  }

  if ($(".reviews-slider").length > 0) {
    const swiper = new Swiper(".reviews-slider", {
      slidesPerView: 1,
      spaceBetween: 19,
      navigation: {
        prevEl: ".reviews-slider .swiperBtnPrev",
        nextEl: ".reviews-slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 19,
        },
      },
    });

    $(".reviews-slider .swiper-slide").on("click", function () {
      const index = $(this).index();
      swiper.slideTo(index);
    });
  }

  if ($(".about").length > 0) {
    if ($(window).width() < 767) {
      const ul = $(".about ul");

      if (ul.length > 0) {
        ul.animate({ scrollLeft: 115 }, 500);
      }
    }
  }

  if ($(".phone-input").length > 0) {
    $(".phone-input").map(function () {
      $(this).inputmask({
        mask: "+7(999) 999-99-99",
        placeholder: "*",
        showMaskOnHover: false,
        showMaskOnFocus: true,
        clearIncomplete: true,
      });
    });
  }

  if ($("[data-fancybox]").length > 0) {
    Fancybox.bind("[data-fancybox]", {
      speedIn: 600,
      speedOut: 600,
    });
  }

  if ($(".modal").length > 0) {
    MicroModal.init({
      openTrigger: "data-modal",

      onShow: () => {
        $("body").addClass("modal-open");
      },

      onClose: () => {
        $("body").removeClass("modal-open");
      },
    });

    $("[data-modal]").map(function () {
      $(this).click((e) => e.preventDefault());
    });
  }

  if ($(".technologies__circle").length > 0) {
    $(".technologies__circle").on("click", function () {
      $(".technologies__info").removeClass("opened");
      $(this).next(".technologies__info").addClass("opened");
    });

    $(document).mouseup(function (e) {
      if (
        !$(".technologies__item").is(e.target) &&
        $(".technologies__item").has(e.target).length === 0
      ) {
        $(".technologies__info").removeClass("opened");
      }
    });
  }

  if ($(".technologies__slider").length > 0) {
    const swiper = new Swiper(".technologies__slider", {
      slidesPerView: 2,
      spaceBetween: 19,
      navigation: {
        prevEl: ".technologies__slider .swiperBtnPrev",
        nextEl: ".technologies__slider .swiperBtnNext",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 10,
        },

        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
        },
        768: {
          slidesPerView: 1.65,
          spaceBetween: 19,
        },
        1024: {
          slidesPerView: 2,
          spaceBetween: 19,
        },
      },
    });
  }

  if ($("[data-btn-disabled]").length > 0) {
    $("[data-btn-disabled]").on("click", function () {
      const formBlock = $(this).parents("form");
      const btn = formBlock.find("[data-for-disabled]");
      const isDisabled = btn.prop("disabled");

      btn.prop("disabled", !isDisabled);
    });
  }
});
