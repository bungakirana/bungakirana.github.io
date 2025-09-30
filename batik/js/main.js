// main.js
document.addEventListener("DOMContentLoaded", () => {
  console.log("Website Batik Nusantara siap! 🎉");

  // Smooth scroll ke bagian tertentu
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      if (link.getAttribute("href").startsWith("#")) {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          window.scrollTo({
            top: targetElement.offsetTop - 60,
            behavior: "smooth"
          });
        }
      }
    });
  });

  // Efek tombol hover
  const buttons = document.querySelectorAll("button, .btn");
  buttons.forEach(btn => {
    btn.addEventListener("mouseover", () => {
      btn.style.transform = "scale(1.05)";
    });
    btn.addEventListener("mouseout", () => {
      btn.style.transform = "scale(1)";
    });
  });

  // Notifikasi jika user membuka halaman tertentu
  let pageTitle = document.title;
  console.log("Kamu sedang membuka halaman:", pageTitle);
});
