const btn = document.querySelector("#toggle");
const menu = document.querySelector(".menu");

btn.addEventListener("click", () => {
    let display = menu.style.display;

    display = display === "block" ? "none" : "block";
    menu.style.display = display;
});
