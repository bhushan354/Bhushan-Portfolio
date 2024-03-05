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
