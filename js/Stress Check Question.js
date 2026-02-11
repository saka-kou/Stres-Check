const innerWrap = document.getElementById("innerWrap");
const slider1 = document.getElementById("slider1");
const slider2 = document.getElementById("slider2");
const slider3 = document.getElementById("slider3");

const slides = document.querySelectorAll(".question").length;
const nextBtn = document.querySelectorAll(".button")
let current = 0;

// console.log(innerWrap);
console.log(slides);
console.log(nextBtn);
console.log(slider1);


// nextBtn.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         const currentIndex = [...slides].findIndex(slide =>
//             slide.classList.contains("active")
//         );
//         let nextIndex = currentIndex + 1;
//         if (nextIndex = slides.length) {
//             slides[i].classList.remove("active");
//             slides[nextIndex].classList.add("active");
//             innerWrap.style.transform = `translateX(${-33.3 * nextIndex}%)`;
//         }
//     });
// });

nextBtn.forEach(button => {
    button.addEventListener("click", next);
});

// slides.forEach(button => {
//     button.addEventListener("click", next);
// });

function next() {
    current++;
    current = Math.min(current + 1 , slides - 1);
    const w = innerWrap.clientWidth;
    // console.log(slider1);
    
    slider1.style.transform = `translateX(-${1400}px)`;
    // slider2.style.transform = `translateX(-${w * current}px)`;
    // slider3.style.transform = `translateX(-${w * current}px)`;
}

// nextBtn.forEach((btn,i) => {
//     btn.addEventListener("click" , () =>{
        
//     })
// })