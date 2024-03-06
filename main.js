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

menuBtn.addEventListener("click", () => {
  const newLocal = "active";
  navigation.classList.add(newLocal);
});

closeBtn.addEventListener("click", () => {
  navigation.classList.remove("active");
});
