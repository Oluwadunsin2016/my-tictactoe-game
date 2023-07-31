const board = document.querySelector(".board");
const tile = document.querySelector(".tile");
const reset = document.getElementById("reset");
const rowOne = document.querySelector(".rowOne");
const rowTwo = document.querySelector(".rowTwo");
const rowThree = document.querySelector(".rowThree");
const firstPlayer = document.querySelector(".first");
const secondPlayer = document.querySelector(".second");
const draw = document.querySelector(".draw");
let scoreOne = document.querySelector(".scoreOne");
let scoreTwo = document.querySelector(".scoreTwo");
let scoreThree = document.querySelector(".scoreThree");

//opponent choosing
const opponentfirstname = document.querySelector("#firstName");
const opponentlastname = document.querySelector("#lastName");

// winner jubilation
const won = document.querySelector(".Jubilation");
const winner = document.querySelector(".winner");

// Draw
const noWinner = document.querySelector(".noWinner");

// Disable sound
const disable = document.querySelector(".disable");


let enable=JSON.parse(localStorage.getItem('enableSound'));
if (enable) {
  disable.textContent='Disable Sound'
}else{
  disable.textContent='Enable Sound'
}

disable.addEventListener('click', ()=>{
if (enable) {
enable=false;
  disable.textContent='Enable Sound'
}else{
enable=true;
  disable.textContent='Disable Sound'
}
  localStorage.setItem('enableSound',JSON.stringify(enable));
})

// Automatic Logout
let loginId = JSON.parse(localStorage.getItem("loginId"));
 let existedPlayers = JSON.parse(localStorage.getItem("registeredPlayers"));
if (existedPlayers && !loginId) {
//  location.href="http://127.0.0.1:5503/index.html";
 location.href="https://my-tictactoe-game.vercel.app/index.html";
}else if (!existedPlayers) {
//  location.href="http://127.0.0.1:5503/pages/registration.html";
 location.href="https://my-tictactoe-game.vercel.app/pages/registration.html";
}

// Logout
const logout= document.querySelector('.logout')
logout.addEventListener('click', ()=>{
localStorage.removeItem('loginId')
localStorage.removeItem('counteredId')
localStorage.removeItem('enableSound')
//  location.href="http://127.0.0.1:5503/index.html";
 location.href="https://my-tictactoe-game.vercel.app/index.html";
})

const playerO = "O";
const playerX = "X";
let nextPlayer = "";

let playSound = new Audio(
  "../sounds/chesspawnsoundeffect055520030nwprev21Mstudiocutter20220818122608.m4a"
);
let winnerSound = new Audio("../sounds/mixkit-audience-light-applause-354.wav");
let drawSound = new Audio(
  "../sounds/mixkit-crowd-disappointment-long-boo-463.mp3"
);

let currentPlayers = JSON.parse(localStorage.getItem("registeredPlayers"));
let id = JSON.parse(localStorage.getItem("loginId"));
let counteredId = JSON.parse(localStorage.getItem("counteredId"));
let currentId = currentPlayers.findIndex((existing) => existing.id == id);
let currentplayer = currentPlayers.find((existing) => existing.id == id);

firstPlayer.textContent =
  currentplayer.scoreDetails[counteredId].playerOne.lastname;
secondPlayer.textContent =
  currentplayer.scoreDetails[counteredId].playerTwo.lastname;
draw.textContent = currentplayer.scoreDetails[counteredId].playerThree.draw;
scoreOne.textContent = currentplayer.scoreDetails[counteredId].playerOne.score;
scoreTwo.textContent = currentplayer.scoreDetails[counteredId].playerTwo.score;
scoreThree.textContent =
  currentplayer.scoreDetails[counteredId].playerThree.score;
let score1 = 0;
let score2 = 0;
let score3 = 0;

let currentPlayer = playerO;
let gameOver = false;

const one = rowOne.children.item(0);
const two = rowOne.children.item(1);
const three = rowOne.children.item(2);

const four = rowTwo.children.item(0);
const five = rowTwo.children.item(1);
const six = rowTwo.children.item(2);

const seven = rowThree.children.item(0);
const eight = rowThree.children.item(1);
const nine = rowThree.children.item(2);

board.addEventListener("click", (b) => {
if (enable) {
  playSound.play();
}
  if (gameOver) {
    playSound.pause();
    return;
  }
  if (b.target.innerText == "") {
    b.target.innerText = currentPlayer;
  } else {
    return;
  }
  if (currentPlayer == playerO) {
    currentPlayer = playerX;
  } else {
    currentPlayer = playerO;
  }
  checkWinner();
});
function checkWinner() {
  if (
    one.textContent == two.textContent &&
    two.textContent == three.textContent &&
    one.textContent != ""
  ) {
    one.classList.add("winner");
    two.classList.add("winner");
    three.classList.add("winner");
    gameOver = true;
  } else if (
    four.textContent == five.textContent &&
    five.textContent == six.textContent &&
    four.textContent != ""
  ) {
    four.classList.add("winner");
    five.classList.add("winner");
    six.classList.add("winner");
    gameOver = true;
  } else if (
    seven.textContent == eight.textContent &&
    eight.textContent == nine.textContent &&
    seven.textContent != ""
  ) {
    seven.classList.add("winner");
    eight.classList.add("winner");
    nine.classList.add("winner");
    gameOver = true;
  }

  if (
    one.textContent == four.textContent &&
    four.textContent == seven.textContent &&
    one.textContent != ""
  ) {
    one.classList.add("winner");
    four.classList.add("winner");
    seven.classList.add("winner");
    gameOver = true;
  } else if (
    two.textContent == five.textContent &&
    five.textContent == eight.textContent &&
    two.textContent != ""
  ) {
    two.classList.add("winner");
    five.classList.add("winner");
    eight.classList.add("winner");
    gameOver = true;
  } else if (
    three.textContent == six.textContent &&
    six.textContent == nine.textContent &&
    three.textContent != ""
  ) {
    three.classList.add("winner");
    six.classList.add("winner");
    nine.classList.add("winner");
    gameOver = true;
  }

  if (
    one.textContent == five.textContent &&
    five.textContent == nine.textContent &&
    one.textContent != ""
  ) {
    one.classList.add("winner");
    five.classList.add("winner");
    nine.classList.add("winner");
    gameOver = true;
  } else if (
    three.textContent == five.textContent &&
    five.textContent == seven.textContent &&
    three.textContent != ""
  ) {
    three.classList.add("winner");
    five.classList.add("winner");
    seven.classList.add("winner");
    gameOver = true;
  }

  nextPlayer = currentPlayer;

  if (gameOver && nextPlayer == playerX) {
    currentplayer.scoreDetails[counteredId].playerOne.score++;
    currentPlayers[currentId] = currentplayer;
    localStorage.setItem("registeredPlayers", JSON.stringify(currentPlayers));
    if (enable) {
    winnerSound.play();
}
    winner.innerText = `${currentplayer.scoreDetails[counteredId].playerOne.firstname} ${currentplayer.scoreDetails[counteredId].playerOne.lastname}`;
    won.style.display = "block";
    setTimeout(() => {
      won.style.display = "none";
      winnerSound.pause();
      location.reload();
    }, 5000);
  } else if (gameOver && nextPlayer == playerO) {
    currentplayer.scoreDetails[counteredId].playerTwo.score++;
    currentPlayers[currentId] = currentplayer;
    localStorage.setItem("registeredPlayers", JSON.stringify(currentPlayers));
    if (enable) {
    winnerSound.play();
}
    winner.innerText = `${currentplayer.scoreDetails[counteredId].playerTwo.firstname} ${currentplayer.scoreDetails[counteredId].playerTwo.lastname}`;
    won.style.display = "block";
    setTimeout(() => {
      won.style.display = "none";
      winnerSound.pause();
      location.reload();
    }, 5000);
  }

  if (
    one.textContent != "" &&
    two.textContent != "" &&
    three.textContent != "" &&
    four.textContent != "" &&
    five.textContent != "" &&
    six.textContent != "" &&
    seven.textContent != "" &&
    eight.textContent != "" &&
    nine.textContent != "" &&
    gameOver == false
  ) {
    currentplayer.scoreDetails[counteredId].playerThree.score++;
    currentPlayers[currentId] = currentplayer;
    localStorage.setItem("registeredPlayers", JSON.stringify(currentPlayers));
    if (enable) {
    drawSound.play();
}
    noWinner.style.display = "block";
    setTimeout(() => {
      noWinner.style.display = "none";
      drawSound.pause();
      location.reload();
    }, 5000);
    gameOver = true;
    return;
  }
}

function submit() {
  let currentPlayers = JSON.parse(localStorage.getItem("registeredPlayers"));
  let id = JSON.parse(localStorage.getItem("loginId"));
  let currentId = currentPlayers.findIndex((existing) => existing.id == id);
  let currentplayer = currentPlayers.find((existing) => existing.id == id);

  if (currentplayer.scoreDetails) {
    let onceCountered = currentplayer.scoreDetails.find(
      (countered) =>
        countered.playerTwo.firstname == opponentfirstname.value.trim().toLowerCase() &&
        countered.playerTwo.lastname == opponentlastname.value.trim().toLowerCase()
    );

    if (!onceCountered) {
      currentplayer.scoreDetails.push({
        playerOne: {
          firstname: currentplayer.firstname,
          lastname: currentplayer.lastname,
          score: 0,
        },
        playerTwo: {
          firstname: opponentfirstname.value.trim().toLowerCase(),
          lastname: opponentlastname.value.trim().toLowerCase(),
          score: 0,
        },
        playerThree: {
          draw: "Draw",
          score: 0,
        },
      });
    } 
  } else {
    currentplayer.scoreDetails = [];
    currentplayer.scoreDetails.push({
      playerOne: {
        firstname: currentplayer.firstname,
        lastname: currentplayer.lastname,
        score: 0,
      },
      playerTwo: {
        firstname: opponentfirstname.value.trim().toLowerCase(),
        lastname: opponentlastname.value.trim().toLowerCase(),
        score: 0,
      },
      playerThree: {
        draw: "Draw",
        score: 0,
      },
    });
  }

  let counteredId = currentplayer.scoreDetails.findIndex(
    (countered) =>
      countered.playerTwo.firstname == opponentfirstname.value.trim().toLowerCase() &&
      countered.playerTwo.lastname == opponentlastname.value.trim().toLowerCase()
  );
let enable=true;
 localStorage.setItem('enableSound',JSON.stringify(enable));
  localStorage.counteredId = counteredId;
  currentPlayers[currentId] = currentplayer;
  localStorage.setItem("registeredPlayers", JSON.stringify(currentPlayers));
  // location.href="http://127.0.0.1:5503/pages/board.html";
  location.href="https://my-tictactoe-game.vercel.app/pages/board.html";
}


if('serviceWorker' in navigator){
  navigator.serviceWorker.register('/sw.js')
    .then(reg => console.log('service worker registered'))
    .catch(err => console.log('service worker not registered', err));
}
