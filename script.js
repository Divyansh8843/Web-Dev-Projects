// Select navbar and menu button elements
let navbar = document.querySelector(".header .navbar");
let menuBtn = document.querySelector("#menu-btn");
let closeNavbarBtn = document.querySelector("#closed-navbar");

// Open and close navbar on menu button clicks
if (menuBtn) {
  menuBtn.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (closeNavbarBtn) {
  closeNavbarBtn.addEventListener("click", () => {
    navbar.classList.remove("active");
  });
}

// Toggle between login and register forms
let loginBtn = document.querySelector(".login-btn");
let registerBtn = document.querySelector(".register-btn");

if (registerBtn && loginBtn) {
  registerBtn.addEventListener("click", () => {
    registerBtn.classList.add("active");
    loginBtn.classList.remove("active");
    document
      .querySelector(".account-form .login-form")
      .classList.remove("active");
    document
      .querySelector(".account-form .register-form")
      .classList.add("active");
  });

  loginBtn.addEventListener("click", () => {
    registerBtn.classList.remove("active");
    loginBtn.classList.add("active");
    document
      .querySelector(".account-form .register-form")
      .classList.remove("active");
    document.querySelector(".account-form .login-form").classList.add("active");
  });
}

// Account form toggle
let accountForm = document.querySelector(".account-form");
let accountBtn = document.querySelector("#account-btn");
let closeFormBtn = document.querySelector("#closed-form");
let btnAccount = document.querySelector("#btn-account");

if (accountBtn) {
  accountBtn.addEventListener("click", () => {
    accountForm.classList.add("active");
  });
}

if (closeFormBtn) {
  closeFormBtn.addEventListener("click", () => {
    accountForm.classList.remove("active");
  });
}

if (btnAccount) {
  btnAccount.addEventListener("click", () => {
    accountForm.classList.add("active");
  });
}

let loadMoreBtn = document.querySelector(".load-more .btn");
if (loadMoreBtn) {
  loadMoreBtn.addEventListener("click", () => {
    document
      .querySelectorAll(".courses .box-container .hide")
      .forEach((show) => {
        show.style.display = "block";
      });
    loadMoreBtn.style.display = "none";
  });
}

// Initialize Swiper sliders
new Swiper(".home-slider", {
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
});

new Swiper(".home-courses-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

new Swiper(".teachers-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

new Swiper(".reviews-slider", {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    "@0.00": {
      slidesPerView: 1,
      spaceBetween: 10,
    },
    "@0.75": {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    "@1.00": {
      slidesPerView: 3,
      spaceBetween: 40,
    },
    "@1.50": {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});

// Load more courses button functionality

