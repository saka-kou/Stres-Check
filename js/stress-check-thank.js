const family = document.getElementById("familyName");
// const num = document.getElementById("num");
const thankYou = document.getElementById("#thank you");
const inputDate = document.getElementById("date");
const now = new Date();
const yyyy = now.getFullYear();
const mm = ("0" + (now.getMonth() + 1)).slice(-2);
const dd = ("0" + now.getDate()).slice(-2);
const today = `${yyyy}-${mm}-${dd}`;
const human = document.getElementById("human");
const thankText = document.getElementById("thankText");
const savaBtn = document.getElementById("savaBtn");
const before = document.querySelector(".thankBefore");
const main = document.querySelector(".main");

// console.log(human);

// console.log(now);
// console.log(date);
// console.log(thankText);
// console.log(family);
console.log(inputDate.value);


// num.addEventListener("input", () => {
//     num.value = num.value.replace(/\D/g, "")
// });

inputDate.value = today;

savaBtn.addEventListener("click", () => {
    if (thankText.value === "" || date.value === "" || family.value === "" || human.value === "") {
        alert("感謝内容が入力されていません");
    }
    else {
        const date = inputDate.value;
        const familyName = family.value;
        const toName = human.value;
        const value = thankText.value;
        localStorage.setItem("savaName", familyName);
        localStorage.setItem("savaDate", date);
        localStorage.setItem("savaToName", toName);
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


