const inputNum = document.getElementById("loginNum");
const savaBtn = document.getElementById("savaBtn");

// inputNum.addEventListener("input", () => {
//     inputNum.value = inputNum.value.replace(/\D/g, "")
// });
inputNum.addEventListener("input", () => {
    inputNum.value = inputNum.value.replace(/[0-9]/g, s => String.fromCharCode(s.charCodeAt(0) - 65248))
});

savaBtn.addEventListener("click", () => {
    const value = inputNum.value;
    localStorage.setItem("savaData", value);
});

