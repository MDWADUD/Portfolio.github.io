const roles = [
    "System Analyst",
    "Developer",
    "IAM Engineer",
    "Software Tester"
];

let i = 0;

/* =========================
   ROLE ANIMATION
========================= */
setInterval(() => {
    i = (i + 1) % roles.length;
    document.getElementById("roleText").textContent = roles[i];}, 500);
/* =========================
   LOADING DOTS
========================= */
setTimeout(() => {
    const loadingDots = document.getElementById("loadingDots");
    let dotCount = 1;
    setInterval(() => {
        dotCount++;
        if (dotCount > 3) {
            dotCount = 1;
        }
        loadingDots.textContent = ".".repeat(dotCount);
    }, 500);
}, 6000);
/* =========================
   MOBILE MENU
========================= */
function toggleMenu() {
    document
        .getElementById("mobileMenu")
        .classList
        .toggle("show");
}

document.addEventListener("click", (event) => {
    const menu = document.getElementById("mobileMenu");
    const button = document.querySelector(".menu-button");
    if (
        menu &&
        button &&
        menu.classList.contains("show") &&
        !menu.contains(event.target) &&
        !button.contains(event.target)
    ) {
        menu.classList.remove("show");
    }
});

/* =========================
   EXPERIENCE SLIDE FORM
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const addExperienceButton =
        document.getElementById("addExperienceButton");
    const experienceForm =
        document.getElementById("experienceForm");
    const closeExperienceForm =
        document.getElementById("closeExperienceForm");
    /* =========================
       OPEN FORM
    ========================= */
    if (addExperienceButton && experienceForm) {
        addExperienceButton.addEventListener("click", (event) => {
            event.stopPropagation();
            experienceForm.classList.add("show");
        });
    }
    /* =========================
       CLOSE WITH X
    ========================= */
    if (closeExperienceForm && experienceForm) {
        closeExperienceForm.addEventListener("click", (event) => {
            event.stopPropagation();
            experienceForm.classList.remove("show");
        });
    }
    /* =========================
       CLOSE WHEN CLICKING OUTSIDE
    ========================= */
    document.addEventListener("click", (event) => {
        if (
            experienceForm &&
            experienceForm.classList.contains("show") &&
            !experienceForm.contains(event.target) &&
            event.target !== addExperienceButton
        ) {

            experienceForm.classList.remove("show");
        }
    });
});
/* =========================
   EXPERIENCE CAROUSEL
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const cards =
        document.querySelectorAll(".experience-item");
    const previousButton =
        document.getElementById("experiencePrev");
    const nextButton =
        document.getElementById("experienceNext");
    const dotsContainer =
        document.getElementById("experienceDots");
    /* =========================
       STOP IF NO EXPERIENCES
    ========================= */
    if (!cards.length) {
        return;
    }
    let currentExperience = 0;
    /* =========================
       CREATE DOTS
    ========================= */
    cards.forEach((card, index) => {
        const dot =
            document.createElement("span");
        dot.addEventListener("click", () => {
            showExperience(index);
        });
        dotsContainer.appendChild(dot);
    });

    const dots =
        dotsContainer.querySelectorAll("span");
    /* =========================
       SHOW EXPERIENCE
    ========================= */
    function showExperience(index) {
        if (index < 0) {
            index = cards.length - 1;
        }

        if (index >= cards.length) {
            index = 0;
        }

        cards.forEach((card) => {
            card.classList.remove("active");
        });

        dots.forEach((dot) => {
            dot.classList.remove("active");
        });

        cards[index].classList.add("active");
        dots[index].classList.add("active");

        currentExperience = index;
    }
    /* =========================
       NEXT BUTTON
    ========================= */
    nextButton.addEventListener("click", () => {
        showExperience(currentExperience + 1);
    });
    /* =========================
       PREVIOUS BUTTON
    ========================= */
    previousButton.addEventListener("click", () => {
        showExperience(currentExperience - 1);
    });
    /* =========================
       SHOW FIRST EXPERIENCE
    ========================= */
    showExperience(0);
});
