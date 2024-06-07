// Créer un événement au scroll

// Réduire la navbar quand on descend vers le vite, la remettre à sa taille initiale si on remonte tout en haut

// Faire apparaitre l'image de la partie improvise

// Faire apparaitre la popup quand on est en bas du site

// Bonus : quand on clicke sur la popup elle disparait pour toujours


let playeOnce = true;

window.addEventListener("scroll", () => {
  // navbar effect
  if (window.scrollY > 20) {
    navbar.style.height = "35px";
  } else {
    navbar.style.height = "90px";
  }

  let scrollValue = (window.scrollY + window.innerHeight) / document.body.offsetHeight;
  // img effect
  if (scrollValue > 0.45) {
    imgImprovise.style.opacity = 1;
    imgImprovise.style.transform = "none";
  }
  console.log(scrollValue)
  // pop-up
  if (scrollValue > 0.95 && playeOnce) {
    popup.style.opacity = 1;
    popup.style.transform = "none";
    playeOnce = false
  }
})

closeBtn.addEventListener("click", () => {
  popup.style.opacity = 0;
  popup.style.transform = "translateX(500px)";
})