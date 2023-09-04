let darkMode = true
const buttonToggle = document.getElementById("toggle-mode")

buttonToggle.addEventListener("click", (event) => {
  document.documentElement.classList.toggle("light")

  /* Para alterar o texto definido no html, por causa da acessibilidade */
  const mode = darkMode ? "light" : "dark"
  event.currentTarget.querySelector("span").textContent = `${mode} mode ativado`

  darkMode = !darkMode

})

