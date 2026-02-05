const num = document.getElementById("num");
const thankYou = document.querySelector("#thank you");
const thankText = document.getElementById("thankText");
const savaBtn = document.getElementById("savaBtn");
const before = document.querySelector(".thankBefore");
const main = document.querySelector(".main");

console.log(thankText);
// console.log(thankContent);


num.addEventListener("input", () => {
    num.value = num.value.replace(/\D/g, "")
});

savaBtn.addEventListener("click", () => {
    if (thankText.value === "") {
        alert("感謝内容が入力されていません");
    }
    else {
        const value = thankText.value;
        localStorage.setItem("savaThank", value);
        main.classList.add("thankBefore");
        before.classList.remove("thankBefore");
        before.classList.add("thankAfter");
    }
});

// window.addEventListener("DOMContentLoaded", () => {
//     const getThank = localStorage.getItem("savaThank");
//     console.log(getThank);
// });


