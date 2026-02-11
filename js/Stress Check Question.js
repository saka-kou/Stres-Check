const innerWrap = document.querySelector(".innerWrap");
const contents = document.getElementsByClassName("contents");
const slides = document.querySelectorAll(".question").length;
const nextBtn = document.querySelectorAll(".button")
let current = 0;

console.log(contents);


nextBtn.forEach((btn, i) => {
    btn.addEventListener("click", next)
});

function next() {
    current++
    // innerWrap.style
    innerWrap.classList.add(`pos${current}`);
    console.log(current);

}


