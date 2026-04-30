/* Sélectionner ce qu'on veut afficher dynamiquement dans cours et formation */

function afficher(id) {
  const sections = document.querySelectorAll(".contenu");

  sections.forEach(section => {
    section.classList.remove("actif");
  });

  document.getElementById(id).classList.add("actif");
}


/* Messages de succès dans contact.html */

document.querySelectorAll("form").forEach(form => {
  form.addEventListener("submit", function(e) {
    e.preventDefault();

    const message = form.nextElementSibling;

    message.style.display = "block";

    form.reset();
  });
});