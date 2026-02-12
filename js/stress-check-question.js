const innerWrap = document.querySelector(".innerWrap");
const main = document.querySelector(".main");
const backBtn = document.getElementById("back");
const slider = document.getElementById("slider");
const contents = document.getElementsByClassName("contents");
const slides = document.querySelectorAll(".question").length;
const nextBtn = document.querySelectorAll(".button")
const nextPageBtn = document.getElementById("nextPageBtn");
const compWrap = document.querySelector(".compWrap");
const closeBtn = document.getElementById("closeBtn");
let current = 0;

console.log(contents);
console.log(nextPageBtn);

nextBtn.forEach((btn, i) => {
    btn.addEventListener("click", next)
});

function next() {
    if (current < contents.length) {
        current++
        slider.classList.add(`pos${current}`);
    }
};

backBtn.addEventListener("click", () => {
    current - 1;
    slider.classList.remove(`pos${current}`);
    console.log(current);
});

nextPageBtn.addEventListener("click", () => {
    main.classList.add("none");
    compWrap.classList.remove("none")
});

closeBtn.addEventListener("click", () => {
    main.classList.remove("none");
    compWrap.classList.add("none");
})