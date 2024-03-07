// navbar eeffect on scroll

window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
})

// service section inside - modal

const serviceModals = document.querySelectorAll(".service-modal");
const learnMoreBtns = document.querySelectorAll(".learn-more-btn");
const modalCloseBtns = document.querySelectorAll(".modal-close-btn");

function openModal(modalIndex) {
    serviceModals[modalIndex].classList.add("active");
}

function closeModal() {
    serviceModals.forEach((modalView) => {
        modalView.classList.remove("active");
    });
}

learnMoreBtns.forEach((learnMoreBtn, i) => {
    learnMoreBtn.addEventListener("click", () => {
        openModal(i);
    });
});

modalCloseBtns.forEach((modalCloseBtn) => {
    modalCloseBtn.addEventListener("click", () => {
        closeModal();
    });
});

// portfolio section

const portfolioModals = document.querySelectorAll(".portfolio-model");
const imgCards = document.querySelectorAll(".img-card");
const portfolioCloseBtns = document.querySelectorAll(".portfolio-close-btn");

var portfolioModal = function (modalClick) {
  portfolioModals[modalClick].classList.add("active");
}

imgCards.forEach((imgCard, i) => {
  imgCard.addEventListener("click", () => {
    portfolioModal(i);
  });
});

portfolioCloseBtns.forEach((portfolioCloseBtn) => {
  portfolioCloseBtn.addEventListener("click", () => {
    portfolioModals.forEach((portfolioModalView) => {
      portfolioModalView.classList.remove("active");
    });
  });
});


// navigation active on pagr scroll

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll("section");
    const scrollY = window.pageYOffset;
  
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      const id = current.getAttribute("id");
  
      if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
        document.querySelector(".nav-items a[href*=" + id + "]").classList.add("active");
      } else {
        document.querySelector(".nav-items a[href*=" + id + "]").classList.remove("active");
      }
    });
  });
  

  // website dark mode

  const themeBtn = document.querySelector(".theme-btn");

  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    themeBtn.classList.toggle("sun");

    localStorage.setItem("saved-theme", getCurrentTheme());
    localStorage.setItem("saved-icon", getCurrentIcon());
  });

  const getCurrentTheme = () => localStorage.getItem("saved-theme");
  const getCurrentIcon = () => localStorage.getItem("saved-icom");


// if(savedTheme){
//   document.body.classList[savedTheme === "dark" ? "add" : "remove"]("dark-theme");
//   themeBtn.classList[savedIcon === "sun" ? "add" : "remove"]("sun");
// }

//mainmenu popup 

const menuBtn = document.querySelector(".nav-menu-btn");
const closeBtn = document.querySelector(".nav-close-btn");
const navigation = document.querySelector(".navigation");
const navItem = document.querySelectorAll(".nav-items a");

menuBtn.addEventListener("click", () => {
  const newLocal = "active";
  navigation.classList.add(newLocal);
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});

navItem.forEach((navItem) => {
  navItem.addEventListener("click", () => {
      navigation.classList.remove("active");
  })
})

// scroll reveal libraru

ScrollReveal ({
  reset: true,
  distance: '60px',
  duration: 1000,
  delay: 50
})

ScrollReveal().reveal('.home .info h2, .section-title-01, section-title-02', { delay: 50, origin: 'right'});
ScrollReveal().reveal('.home .info h3, .home .info p, .about-info .btn', { delay: 50, origin: 'left'});
ScrollReveal().reveal('.home .info .btn', { delay: 50, origin: 'bottom'});

ScrollReveal().reveal('.media-icons i, .contact-left li', { delay: 50, origin: 'left'});
ScrollReveal().reveal('.home-img, .about-img', { delay: 50, origin: 'bottom'});

ScrollReveal().reveal('.about .description', { delay: 50, origin: 'right'});

ScrollReveal().reveal('.about .professional-list li', { delay: 50, origin: 'right'});

ScrollReveal().reveal('.skills-description, .service-description, .contact-card, contact-left-h2', { delay: 50, origin: 'left'});

ScrollReveal().reveal('.experience-card, .service-card, .education, .portfolio .img-card', { delay: 50, origin: 'left'});