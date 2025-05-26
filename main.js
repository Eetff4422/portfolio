document.addEventListener("DOMContentLoaded", () => {
    const nav = document.getElementById("nav");
  
    nav.innerHTML = `
      <nav class="navbar">
        <ul>
          <li><a href="/index.html" data-path="/index.html">Accueil</a></li>
          <li><a href="/about.html" data-path="/about.html">À propos</a></li>
          <li><a href="/projects.html" data-path="/projects.html">Projets</a></li>
        </ul>
      </nav>
    `;
  
    const currentPath = window.location.pathname;
    const links = nav.querySelectorAll("a");
  
    links.forEach(link => {
      if (link.getAttribute("data-path") === currentPath) {
        link.classList.add("active");
      }
    });
  });
  document.querySelector("#nav").innerHTML = `
  <nav class="navbar">
    <div class="nav-logo">
      <img src="/assets/logo.png" alt="Logo" />
    </div>
    <div class="nav-links">
      <a href="/index.html">Accueil</a>
      <a href="/about.html">À propos</a>
      <a href="/projects.html">Projets</a>
    </div>
  </nav>
`;
  