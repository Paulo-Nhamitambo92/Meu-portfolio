document.addEventListener("DOMContentLoaded", () => {
    const toggle = document.getElementById("darkModeToggle");
    const body = document.body;
  
    /* Verifica se o usuário já ativou dark mode antes */
    if (localStorage.getItem("modo") === "dark") {
      body.classList.add("dark");
    }
  
    toggle.addEventListener("click", () => {
      body.classList.toggle("dark");
  
      /* Salva a preferência */
      if (body.classList.contains("dark")) {
        localStorage.setItem("modo", "dark");
        toggle.textContent = "☀️";
      } else {
        localStorage.setItem("modo", "light");
        toggle.textContent = "🌙";
      }
    });
  
    /* Altera ícone do botão conforme o modo */
    toggle.textContent = body.classList.contains("dark") ? "☀️" : "🌙";
  });
  