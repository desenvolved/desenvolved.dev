function toggleModel() {
  let html = document.documentElement
  html.classList.toggle("light")

  // selecionar tag imagem
  let img = document.querySelector("#profile img")
  // se tiver on ligth mode, adicionar a imagem light
  if (html.classList.contains("light")) {
    img.setAttribute("src", "/assets/avatar.png")
  } else {
    // se tiver off light mode, manter a imagem normal
    img.setAttribute("src", "/assets/avatar.png")
  }
}
