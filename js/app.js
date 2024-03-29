import stars from "./stars.js";

// var stars;

const pointsRule = {
  base: 40,
  1: 10,
  2: 20,
  3: 30,
  0: 0
};

var round = {
  currentImageIndex: null,
  level: 1,
  maskClicks: 0
};

var playerPoints;

const popup = document.getElementById("popup");
const btnStart = document.getElementById("starter_btn");
const btnRestart = document.getElementById("btn_play_again");
const gameBoard = document.getElementById("game_board");
const textResponse = document.getElementById("text_response");
const btnResponse = document.getElementById("btn_response");
const showRound = document.getElementById("show_round");
const showScore = document.getElementById("show_score");
const answerInput = document.getElementById("text_response");
const starPict = document.getElementById("current_star");
const masks = document.getElementsByClassName("mask-item");
var currentStar = null;

function gameOver(mode) {
  const img = popup.querySelector("img");
  if (mode === "loose") img.src = "./media/img/loose.png";
  else img.src = "./media/img/you_win.PNG";
  popup.classList.add("is-active");
  endGame();
  resetMasks();
  displayImage();
}

function verifyUserResponse() {
  console.log(round);
  // console.log("current star ?", currentStar.name);
  if (
    currentStar.name.toLowerCase().replace(" ", "") ===
    answerInput.value.toLowerCase().replace(" ", "")
  ) {
    console.log("oui");
    // console.log("bonne réponse !!!");
    // console.log(round);
    // console.log(pointsRule[round.maskClicks]);
    playerPoints += pointsRule.base - pointsRule[round.maskClicks];
  } else {
    // console.log("mauvaise réponse, vous perdez tous vos acquis");
    playerPoints = 0;
    if (round.maskClicks === 3) {
      return gameOver("loose");
    }
  }
  goToNextRound();
  answerInput.value = ""; // reset text input
  // 1 definir un input de type text en HTML (avec un id)
  // 2 depuis JS, selectionner cet input (par so id)
  // 3 ajouter un event listener sur cet input
  // indice = le type d'évent que tu souhaite écouter = change
  // 4 associer une function (handler)
  // 5 afficher un log coucou dans la console à chaque changement
}

function disappearMask() {
  document.getElementsByClassName(".mask").forEach(function($mask) {
    if (mask.style.backgroundColor === "goldenrod") {
      $mask.style.visibility = "visible";
    } else {
      $mask.style.visibility = "hidden";

      mask.onclick = function() {
        displayImage();
      };
      // console.log("bon");
    }
  });
}

function displayImage() {
  const number = Math.floor(Math.random() * stars.length);
  currentStar = stars[number];
  starPict.src = currentStar.path;
  round.currentImageIndex = number;
  // 1 = recup l'image avec getElementById
  // 2 = affecter une variable img avec le result de getElementById
  // ci-dessus: c'est un OBJECT !!!
  // tu veux accéder à sa propriété src
  // tu peux changer cette source (avec le signe = )
  // donc tu peux associer la src avec le path
  return currentStar;
}

function endGame() {
  popup.classList.add("is-active");
  resetMasks();
  updateDisplay();
}

function updateDisplay() {
  showRound.textContent = "Round n°" + round.level;
  showScore.textContent = "Your score : " + playerPoints;
}

function goToNextRound() {
  console.log("on passe au next round");
  console.log(round, playerPoints);
  stars.splice(round.currentImageIndex, 1); // check sur mdn la doc
  round.level++;
  round.maskClicks = 0;
  updateDisplay();
  if (stars.length === 0) return;
  setTimeout(function() {
    resetMasks();
    displayImage();
  }, 3000);
}

function resetMasks(evt) {
  for (let i = 0; i < masks.length - 1; i++) {
    console.log(i);
    masks[i].style.background = "goldenrod";
    masks[i].style.borderColor = "black";
  }
}

function initMasks() {
  function revealMask(evt) {
    evt.target.style.background = "transparent";
    evt.target.style.borderColor = "transparent";
    round.maskClicks++;
  }

  for (let i = 0; i < masks.length - 1; i++) {
    masks[i].onclick = revealMask;
  }
}

function startGame() {
  playerPoints = 0;
  // stars = [...x];
  // stars = stars.splice(0, 1);
  popup.classList.remove("is-active");
  btnStart.classList.add("is-hidden");
  gameBoard.classList.remove("is-hidden");
  showRound.classList.remove("is-hidden");
  showScore.classList.remove("is-hidden");
  textResponse.classList.remove("is-hidden");
  btnResponse.classList.remove("is-hidden");
  updateDisplay();
  displayImage();
  initMasks();
}

// EVENT LISTENERS !!! on écoute les évènements sur les éléments HTML
btnStart.onclick = startGame;
btnRestart.onclick = startGame;
btnResponse.onclick = function() {
  verifyUserResponse();
};
