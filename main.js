function startgame() {
  const catCharacterselect = document.querySelector(".cat-character");
  const obstacle = document.querySelector(".obstacle");
  const outputmessage = document.querySelector(".endgamemessage");
  let isAnimating = false;
  document.addEventListener("keydown", (event) => {
    if (event.code === "Space" && !isAnimating) {
      isAnimating = true;
      catCharacterselect.classList.add("catanimation");
      setTimeout(() => {
        catCharacterselect.classList.remove("catanimation");
        isAnimating = false;
      }, 750);
    }
  });
  var collisioncheck = setInterval(function() {
    let catdata = catCharacterselect.getBoundingClientRect();
    let obstacledata = obstacle.getBoundingClientRect();
    const outputmessage = document.querySelector(".endgamemessage");
    if (catdata.right >= obstacledata.left && 
        catdata.left <= obstacledata.right && 
        catdata.bottom >= obstacledata.top && 
        catdata.top <= obstacledata.bottom ) {
      obstacle.style.animation = "none";
      obstacle.style.display = "none";
      catCharacterselect.style.animation = "none";
      catCharacterselect.style.display = "none";
      outputmessage.innerHTML = "well played";
    }
  }, 50);
  
  document.addEventListener("keydown", (event) => {
    if (event.code === "KeyR") {
      obstacle.style.animation = "";
      obstacle.style.display = "";
      catCharacterselect.style.animation = "";
      catCharacterselect.style.display = "";
      outputmessage.innerHTML = "";
      startgame();
    }
  });
}

  /*Wholepage.addEventListener("keypress", (event) => {
    console.log(`Key Code: ${event.keyCode}`);
  });
  alert("sheesh");
}*/
