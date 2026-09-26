const surpriseBtn = document.getElementById("surpriseBtn");
const surprise = document.getElementById("surprise");
const hearts = document.getElementById("hearts");
const confetti = document.getElementById("confetti");

surpriseBtn.addEventListener("click", () => {
  surprise.classList.remove("hidden");
  surprise.scrollIntoView({ behavior: "smooth", block: "center" });
  surpriseBtn.textContent = "💗 Surprise Opened!";
  surpriseBtn.disabled = true;
  launchConfetti();
});

function makeHeart() {
  const heart = document.createElement("div");
  heart.className = "floating-heart";
  heart.textContent = ["💗", "💕", "💖", "💜", "✨"][Math.floor(Math.random() * 5)];
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = (4 + Math.random() * 3) + "s";
  hearts.appendChild(heart);

  setTimeout(() => heart.remove(), 7500);
}

setInterval(makeHeart, 900);

function launchConfetti() {
  for (let i = 0; i < 90; i++) {
    const piece = document.createElement("div");
    piece.className = "confetti-piece";
    piece.style.left = Math.random() * 100 + "vw";
    piece.style.animationDelay = Math.random() * 0.8 + "s";
    piece.style.background = [
      "#d85a9d", "#8e62c6", "#f3b6d7", "#f5c85b", "#9cc7ff", "#9bd7b1"
    ][Math.floor(Math.random() * 6)];
    piece.style.transform = `rotate(${Math.random() * 360}deg)`;
    confetti.appendChild(piece);

    setTimeout(() => piece.remove(), 4000);
  }
}
