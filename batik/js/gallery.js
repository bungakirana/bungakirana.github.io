// gallery.js
document.addEventListener("DOMContentLoaded", () => {
  const galleryImages = document.querySelectorAll(".gallery img");

  galleryImages.forEach(img => {
    img.style.cursor = "pointer";

    img.addEventListener("click", () => {
      openLightbox(img.src, img.alt);
    });
  });

  function openLightbox(src, alt) {
    // Buat overlay
    const overlay = document.createElement("div");
    overlay.id = "lightbox-overlay";
    overlay.style.position = "fixed";
    overlay.style.top = "0";
    overlay.style.left = "0";
    overlay.style.width = "100%";
    overlay.style.height = "100%";
    overlay.style.background = "rgba(0,0,0,0.8)";
    overlay.style.display = "flex";
    overlay.style.alignItems = "center";
    overlay.style.justifyContent = "center";
    overlay.style.zIndex = "9999";

    // Buat konten gambar
    const imgBox = document.createElement("div");
    imgBox.style.position = "relative";
    imgBox.style.maxWidth = "80%";
    imgBox.style.maxHeight = "80%";

    const newImg = document.createElement("img");
    newImg.src = src;
    newImg.alt = alt;
    newImg.style.maxWidth = "100%";
    newImg.style.maxHeight = "100%";
    newImg.style.borderRadius = "8px";
    newImg.style.boxShadow = "0 4px 15px rgba(0,0,0,0.5)";

    // Tombol close
    const closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.style.position = "absolute";
    closeBtn.style.top = "-10px";
    closeBtn.style.right = "-10px";
    closeBtn.style.fontSize = "40px";
    closeBtn.style.color = "#fff";
    closeBtn.style.cursor = "pointer";

    closeBtn.addEventListener("click", () => {
      document.body.removeChild(overlay);
    });

    imgBox.appendChild(newImg);
    imgBox.appendChild(closeBtn);
    overlay.appendChild(imgBox);
    document.body.appendChild(overlay);
  }
});
