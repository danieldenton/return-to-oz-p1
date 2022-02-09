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

const [winningSelections, incorrectSelections] = randomSplit(ornanments, 3);
const playerWinSel = [];
const playerInc = [];

let correctClicked = 0;
let incorrectClicked = 0;
function totalClicks() {
  return correctClicked + incorrectClicked;
}

const audio = new Audio("oz.wav");

winningSelections.forEach(function (orn) {
  orn.addEventListener(
    "click",
    function () {
      correctClicked += 1;
      audio.play();
      const images = ["Scarecrow.png", "Jack.png", "TikTok.png"];
      orn.src = images[correctClicked - 1];
      if (correctClicked === 3) {
        setInterval(function () {
          displayResult();
        }, 3000);
      }
    },
    {
      once: true,
    }
  );
});

incorrectSelections.forEach(function (orn) {
  orn.addEventListener("click", function () {
    incorrectClicked += 1;
    orn.style.display = "none";
    audio.play();
    if (incorrectClicked === 3) {
      displayResult();
    }
  });
});

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function randomSplit(arr, idx) {
  shuffle(arr);
  const start = arr.slice(0, idx);
  const end = arr.slice(idx, arr.length);
  return [start, end];
}

function displayResult() {
  document.querySelector("#container").style.display = "none";
  document.querySelector("#background-text").innerText = "";
  if (correctClicked === 1) {
    document.querySelector("#result").innerText =
      "Dorothy managed to save Scarecrow, but Jack, Tik-Tok and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
  } else if (correctClicked === 2) {
    document.querySelector("#result").innerText =
      "Dorothy managed to save Scarecrow and Jack, but Tik-Tok and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
    ("href=beware.png display-text");
  } else if (incorrectClicked === 3) {
    document.querySelector("#result").innerText =
      "Dorothy has failed to save her friends. They and the rest of Oz still belong to the Gnome King.";
    document.querySelector("body").style.backgroundImage = "url(GK.png)";
    document.querySelector("#play-again").innerText = "Play again";
  } else {
    window.location.href = "index4.html";
  }
}

console.log(winningSelections, incorrectSelections);
