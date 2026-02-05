const inputNum = document.getElementById("loginNum");
const savaBtn = document.getElementById("savaBtn");

inputNum.addEventListener("input", () => {
    inputNum.value = inputNum.value.replace(/\D/g, "")
});

savaBtn.addEventListener("click", () => {
    const value = inputNum.value;
    localStorage.setItem("savaData", value);
});

