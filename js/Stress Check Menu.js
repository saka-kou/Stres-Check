const taskSelect = document.getElementById("taskSelect");
const thankSelect = document.getElementById("thankSelect");
const taskShow = taskSelect.closest(".show");
const thankShow = thankSelect.closest(".show");


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
