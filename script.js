const roles = [
    "System Analyst",
    "Developer",
    "IAM Engineer",
    "Software Tester"
];

let i = 0;

setInterval(() => {
    i = (i + 1) % roles.length;
    document.getElementById("roleText").innerHTML = roles[i];
}, 400);

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

}, 5000);

function toggleMenu() {
    document.getElementById("mobileMenu").classList.toggle("show");
}