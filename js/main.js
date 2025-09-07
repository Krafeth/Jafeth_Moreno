// Menú hamburguesa
const hamburger = document.getElementById("hamburger");
const nav = document.getElementById("nav");
hamburger.addEventListener("click", () => {
  nav.classList.toggle("active");
});

// Toggle de tema claro/oscuro
const themeToggle = document.getElementById("theme-toggle");
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("light");
  themeToggle.innerHTML = document.body.classList.contains("light")
    ? '<i class="fas fa-sun"></i>'
    : '<i class="fas fa-moon"></i>';
});

// Animar barras de progreso
const fills = document.querySelectorAll(".fill");
window.addEventListener("scroll", () => {
  fills.forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      const level = bar.dataset.level;
      bar.style.width = level + "%";
    }
  });
});

// Filtro proyectos
const filterButtons = document.querySelectorAll(".filters button");
const cards = document.querySelectorAll(".card");
filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const filter = btn.dataset.filter;
    cards.forEach(card => {
      card.style.display =
        filter === "all" || card.dataset.category === filter
          ? "block"
          : "none";
    });
  });
});

// Modal proyecto
const modals = document.querySelectorAll(".modal");
const openBtns = document.querySelectorAll(".open-modal");
const closeBtns = document.querySelectorAll(".close-modal");

openBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const target = document.getElementById(btn.dataset.target);
    if (target) target.style.display = "flex";
  });
});

closeBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    btn.closest(".modal").style.display = "none";
  });
});

window.addEventListener("click", e => {
  modals.forEach(modal => {
    if (e.target === modal) modal.style.display = "none";
  });
});

// Validación formulario
const form = document.getElementById("contact-form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const name = document.getElementById("name");
  const email = document.getElementById("email");
  const message = document.getElementById("message");

  if (name.value.trim() === "" || email.value.trim() === "" || message.value.trim() === "") {
    alert("Por favor completa todos los campos.");
    return;
  }
  if (!/\S+@\S+\.\S+/.test(email.value)) {
    alert("Por favor ingresa un correo válido.");
    return;
  }
  alert("¡Mensaje enviado con éxito!");
  form.reset();
});
