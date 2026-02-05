const inputText = document.getElementById("num");
const savaBtn = document.getElementById("savaBtn");

console.log(inputText);

inputText.addEventListener("input", () => {
    inputText.value = inputText.value.replace(/\D/g, "")
});
