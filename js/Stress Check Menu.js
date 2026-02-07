const taskSelect = document.getElementById("taskSelect");
const thankSelect = document.getElementById("thankSelect");
const taskShow = taskSelect.closest(".show");
const thankShow = thankSelect.closest(".show");
const profileNum = document.getElementById("profileNum");
const family = document.getElementById("familyName");


window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savaData");
    if (saved) {
        profileNum.textContent = saved;
    }
});
window.addEventListener("DOMContentLoaded", () => {
    const familyName = localStorage.getItem("savaName");
    if (familyName) {
        family.textContent = `${familyName}さんより感謝が届いています！`;
    }
});

taskSelect.addEventListener("mousedown", () => {
    taskShow.classList.add("open");
});

taskSelect.addEventListener("blur", () => {
    taskShow.classList.remove("open");
});

thankSelect.addEventListener("mousedown", () => {
    thankShow.classList.add("open");
});

thankSelect.addEventListener("blur", () => {
    thankShow.classList.remove("open");
});
