const toggleSwitch = document.getElementById("toggle-switch");
toggleSwitch.addEventListener("change", () => {
  if (toggleSwitch.checked) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
    // désactiver les deux éléments
    element1.classList.remove("active");
  }
});