const Menu = document.querySelector(".header-menu");
const MenuButton = document.querySelector(".header__menu-button")
const Close = document.querySelector(".header-close");

MenuButton.addEventListener("click", function () {
  Close.classList.add("active");
  MenuButton.classList.add("active");
  Menu.classList.add("active");
});
Close.addEventListener("click", function () {
  Close.classList.remove("active");
  MenuButton.classList.remove("active");
  Menu.classList.remove("active");
});

const Links = document.querySelectorAll(".header__nav-link");

for (let i = 0; i < Links.length; i++) {
  Links[i].addEventListener('click', function () {
    if (Links[i].nextElementSibling.classList.contains("active")) {
      Links[i].nextElementSibling.classList.remove('active');
    } else {
      for (let j = 0; j < Links.length; j++) {
        Links[j].nextElementSibling.classList.remove("active");
      }
      Links[i].nextElementSibling.classList.add('active')
    }
  });
}

for (let i = 0; i < Links.length; i++) {
  Links[i].addEventListener('click', function () {
    if (Links[i].classList.contains("active")) {
      Links[i].classList.remove('active');
    } else {
      for (let j = 0; j < Links.length; j++) {
        Links[j].classList.remove("active");
      }
      Links[i].classList.add('active')
    }
  });
}

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
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