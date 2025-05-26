export function renderNav() {
    document.getElementById("nav").innerHTML = `
      <nav class="navbar">
        <div class="navbar-left">
          <a href="/index.html"><img src="/images/logo.png" alt="Logo" class="logo" /></a>
          <div class="navbar-toggle" id="mobile-menu">&#9776;</div>
        </div>
        <ul class="navbar-links" id="navbar-links">
          <li><a href="/index.html">Accueil</a></li>
          <li><a href="/about.html">À propos</a></li>
          <li><a href="/projects.html">Projets</a></li>
          <li><a href="/contact.html">Contact</a></li>
        </ul>
      </nav>
    `;
  
    const toggle = document.getElementById("mobile-menu");
    const links = document.getElementById("navbar-links");
  
    toggle.addEventListener("click", () => {
      links.classList.toggle("show");
    });
  }
  