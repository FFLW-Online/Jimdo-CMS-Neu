document.addEventListener("DOMContentLoaded", function () {
  const navContainer = document.getElementById("main-nav");
  if (!navContainer) return;

  fetch("nav.html")
    .then(response => {
      if (!response.ok) throw new Error("Menü konnte nicht geladen werden.");
      return response.text();
    })
    .then(html => {
      navContainer.innerHTML = html;

      // 1. Aktuelle Seite im Menü markieren (aria-current)
      const currentPath = window.location.pathname.split("/").pop() || "index.html";
      const links = navContainer.querySelectorAll("a");
      
      links.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
          link.setAttribute("aria-current", "page");
          link.classList.add("active");
        }
      });

      // 2. Mobile-Menü Toggle (Ein-/Ausklappen)
      const toggleBtn = document.getElementById("menu-toggle");
      const navList = document.getElementById("nav-list");

      if (toggleBtn && navList) {
        toggleBtn.addEventListener("click", function () {
          navList.classList.toggle("is-open");
        });
      }
    })
    .catch(error => console.error(error));
});
