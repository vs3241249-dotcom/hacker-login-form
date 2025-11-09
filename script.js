const brightness = document.getElementById("brightness");
const light = document.querySelector(".light");
const overlay = document.querySelector(".brightness-overlay");

brightness.addEventListener("input", (e) => {
  const value = e.target.value;

  // Lamp light opacity
  light.style.opacity = value / 100;

  // Screen brightness overlay
  overlay.style.background = `rgba(255, 255, 200, ${value / 200})`;
});

function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  alert(`Welcome, ${username || "User"}!`);
}
