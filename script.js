const tombolSapa = document.getElementById('');
tombolSapa.addEventListener('click', function() {
alert('kasooonnnnnnnnn');
});

// === Foto meledak + stiker terbang ===
document.getElementById("Wanbutton").addEventListener("click", explodePhoto);

function explodePhoto() {
  const photo = document.getElementById("photo");
  const stickerContainer = document.getElementById("stickerContainer");

  // Ambil posisi foto
  const rect = photo.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;

  // Hilangkan foto (ledakan)
  photo.style.transition = "transform 0.4s ease, opacity 0.4s ease";
  photo.style.transform = "scale(1.5) rotate(20deg)";
  photo.style.opacity = "0";
  setTimeout(() => (photo.style.display = "none"), 400);

  // Efek partikel kecil (api atau serpihan)
  for (let i = 0; i < 25; i++) {
    const particle = document.createElement("div");
    particle.style.position = "fixed";
    particle.style.left = cx + "px";
    particle.style.top = cy + "px";
    particle.style.width = particle.style.height = Math.random() * 8 + 4 + "px";
    particle.style.borderRadius = "50%";
    particle.style.background =
      ["#ff9800", "#ffc107", "#ff5722", "#fff"][Math.floor(Math.random() * 4)];
    particle.style.pointerEvents = "none";
    particle.style.zIndex = 9999;
    document.body.appendChild(particle);

    const angle = Math.random() * Math.PI * 2;
    const dist = 100 + Math.random() * 120;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist;

    particle.animate(
      [
        { transform: "translate(0,0)", opacity: 1 },
        { transform: `translate(${x}px,${y}px) scale(0.3)`, opacity: 0 }
      ],
      { duration: 900 + Math.random() * 500, easing: "ease-out", fill: "forwards" }
    );

    setTimeout(() => particle.remove(), 1500);
  }

  // Efek stiker keluar
  const stickerList = [
    "🌟", "🔥", "💥", "😂", "😎", "✨", "🎉", "❤️", "🚀", "💣"
  ];

  for (let i = 0; i < 8; i++) {
    const sticker = document.createElement("div");
    sticker.textContent = stickerList[Math.floor(Math.random() * stickerList.length)];
    sticker.style.position = "fixed";
    sticker.style.left = cx + "px";
    sticker.style.top = cy + "px";
    sticker.style.fontSize = 30 + Math.random() * 20 + "px";
    sticker.style.pointerEvents = "none";
    sticker.style.zIndex = 10000;
    stickerContainer.appendChild(sticker);

    const angle = Math.random() * Math.PI * 2;
    const dist = 120 + Math.random() * 120;
    const x = Math.cos(angle) * dist;
    const y = Math.sin(angle) * dist - 60;

    sticker.animate(
      [
        { transform: "translate(0,0) scale(1)", opacity: 1 },
        { transform: `translate(${x}px,${y}px) rotate(${Math.random() * 360}deg) scale(0.6)`, opacity: 0 }
      ],
      { duration: 1500 + Math.random() * 600, easing: "ease-out", fill: "forwards" }
    );

    setTimeout(() => sticker.remove(), 2000);
  }
}
