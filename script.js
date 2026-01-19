const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;

toggleBtn.addEventListener('click', () => {
    if (body.classList.contains("light")) {
        body.classList.remove("light");
        body.classList.add("dark");
        toggleBtn.textContent = "Modo Claro";
    } else {
        body.classList.remove("dark");
        body.classList.add("light");
        toggleBtn.textContent = "Modo Escuro";
    }
});