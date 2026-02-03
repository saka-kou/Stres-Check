const num = document.getElementById("loginNum");
const savaBtn = document.getElementById("savaBtn");

savaBtn.addEventListener("click", () => {
    const value = num.value;
    localStorage.setItem("savaData", value);
});
