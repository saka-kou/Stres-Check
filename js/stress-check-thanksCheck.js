const myName = document.getElementById("myName");
const thank = document.getElementById("thank");
const toName = document.getElementById("name");
const day = document.getElementById("day");

window.addEventListener("DOMContentLoaded", () => {
    const sentName = localStorage.getItem("savaToName");
    if (sentName) {
        myName.insertAdjacentHTML("beforeend", `<p>${sentName}さんへ</p>`);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const savedThank = localStorage.getItem("savaThank");
    if (savedThank) {
        thank.insertAdjacentHTML("beforeend", `<p>${savedThank}</p>`);
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const sentDay = localStorage.getItem("savaDate");
    if (sentDay) {
        day.textContent = `${sentDay}`;
    }
});

window.addEventListener("DOMContentLoaded", () => {
    const savedName = localStorage.getItem("savaName");
    if (savedName) {
        toName.textContent = `${savedName}より`;
    }
});