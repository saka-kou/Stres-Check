const thank = document.querySelector(".thank");

window.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("savaThank");
    if (saved) {
        thank.insertAdjacentHTML("beforeend", `<p>${saved}</p>`);
    }
});


// thank.insertAdjacentHTML("beforeend", <p></p>);