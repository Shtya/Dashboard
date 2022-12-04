let Targets = document.querySelector(".target")
let span = document.querySelectorAll(".progress span")
window.onscroll = function () {
  if (window.scrollY >= Targets.offsetTop -200  ) {
    span.forEach(e => {
      e.style.width = e.dataset.prog  
      e.style.opacity = 1
    })
  }
  
}

