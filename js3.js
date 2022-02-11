const ornanments = [
  document.getElementById("object1"),
  document.getElementById("object2"),
  document.getElementById("object3"),
  document.getElementById("object4"),
  document.getElementById("object5"),
  document.getElementById("object6"),
  document.getElementById("object7"),
  document.getElementById("object8"),
  document.getElementById("object9"),
];

//variables for winning and incorrectselctions that change everytime the game is played
const [winningSelections, incorrectSelections] = randomSplit(ornanments, 3);
// const playerWinSel = [];
// const playerInc = [];

// function to shuffle the array of ornaments
function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// function that calls the shuffle and separates the shuffled array into 2
function randomSplit(arr, idx) {
  shuffle(arr);
  const start = arr.slice(0, idx);
  const end = arr.slice(idx, arr.length);
  return [start, end];
}

let correctClicked = 0;
let incorrectClicked = 0;

const audio1 = new Audio("audio/correct.wav");
const audio2 = new Audio("audio/incorrect.wav");
const audio3 = new Audio("audio/laugh.wav");
// The click that adds to correctClicked, plays sound, changes the images and the text on the screen
winningSelections.forEach(function (orn) {
  orn.addEventListener(
    "click",
    function () {
      correctClicked += 1;
      audio1.play();
      const images = [
        "images/Scarecrow.png",
        "images/Jack.png",
        "images/TikTok.png",
      ];
      orn.src = images[correctClicked - 1];
      const textResponses = [
        "You found Scarecrow!",
        "You found Jack!",
        "You found TikTok!",
      ];
      document.getElementById("text").innerText =
        textResponses[correctClicked - 1];
      document.getElementById("text").style.color = "rgb(170, 255, 0)";
      // if 3 correct selections were made the game is over and display result is called
      if (correctClicked === 3) {
        setTimeout(function () {
          displayResult();
        }, 3000);
      }
    },
    {
      // so you can't click on the winning boxes more thamn once
      once: true,
    }
  );
});
// same as above for incorrectSelections
incorrectSelections.forEach(function (orn) {
  orn.addEventListener("click", function () {
    incorrectClicked += 1;
    // instead of changing the images the selections disappear
    orn.style.display = "none";
    audio2.play();
    const textResponses = [
      "That was not one of your friends!",
      "You're running out of chances!",
      "Now you're down to your last chance!",
    ];
    document.getElementById("text").innerText =
      textResponses[incorrectClicked - 1];
    document.getElementById("text").style.color = "rgb(240, 225, 60)";
    // if 4 incorrect selections are made the game is over
    if (incorrectClicked === 4) {
      displayResult();
    }
  });
});

function endLaugh() {
  setTimeout(function () {
    audio3.play();
  }, 1000);
}

function displayResult() {
  document.querySelector("#container").style.display = "none";
  document.querySelector("#background-text").innerText = "";
  if (correctClicked === 1) {
    endLaugh();
    document.querySelector("#result").innerText =
      "Dorothy managed to save Scarecrow, but Jack, TikTok and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(images/GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
  } else if (correctClicked === 2) {
    endLaugh();
    document.querySelector("#result").innerText =
      "Dorothy managed to save Scarecrow and Jack, but TikTok and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(images/GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
    ("href=beware.png display-text");
  } else if (correctClicked === 3) {
    // because of some overlapping divs near the envent listeners this ending calls a new HTML doc
    window.location.href = "index4.html";
  } else {
    endLaugh();
    document.querySelector("#result").innerText =
      "Dorothy has failed to save her friends. They and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(images/GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
  }
}

console.log(winningSelections, incorrectSelections);
