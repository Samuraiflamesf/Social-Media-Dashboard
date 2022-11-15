let btnDark = document.querySelector(".btnDark");
let btnLight = document.querySelector(".btnLight");
let body = document.querySelector("body");
btnDarkMode = true;

function darkMode() {
  if (btnDarkMode == true) {
    btnDarkMode = false;
    btnLight.classList.add("d-none");
    btnDark.classList.remove("d-none");
    body.classList.remove("dark");
    body.classList.add("light");
    animation();
  } else if (btnDarkMode == false) {
    btnDarkMode = true;
    btnDark.classList.add("d-none");
    btnLight.classList.remove("d-none");
    body.classList.remove("light");
    body.classList.add("dark");
    
    animation();
  }
}

function animation() {

  let cards = document.querySelectorAll(".card");
  clearTimeout();
  for (let i = 0; i < cards.length; i++) {
    let card = cards[i];
    card.classList.add("animate__animated");
    card.classList.add("animate__zoomIn");
    setTimeout(() => {
      card.classList.remove("animate__animated");
      card.classList.remove("animate__zoomIn");
    }, 900);
  }
}
animation()

