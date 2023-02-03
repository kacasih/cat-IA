function startgame() {
  const catCharacterselect = document.querySelector(".cat-character");
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
}


var collisioncheck = setInterval(function() {
  var catdata = catCharacterselect.getBoundingClientRect();
  var obstacledata = obstacle.getBoundingClientRect();

  if (catdata.right > obstacledata.left && 
      catdata.left < obstacledata.right && 
      catdata.bottom > obstacledata.top && 
      catdata.top < obstacledata.bottom ) {
    obstacle.style.animation = "none";
    obstacle.style.display = "none";
    alert("well played");
  } 

}, 50);
