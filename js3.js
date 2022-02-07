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

winningSelections.forEach(function (orn) {
  orn.addEventListener(
    "click",
    function () {
      correctClicked += 1;
      if (totalClicks() === 3) {
        displayResult();
      }
    },
    {
      once: true,
    }
  );
});

incorrectSelections.forEach(function (orn) {
  orn.addEventListener(
    "click",
    function () {
      incorrectClicked += 1;
      if (totalClicks() === 3) {
        displayResult();
      }
    },
    {
      once: true,
    }
  );
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
  document.querySelector(
    "#result"
  ).innerHTML = `Correct selections: ${correctClicked}, incorrect selections: ${incorrectClicked}`;
}

console.log(winningSelections, incorrectSelections);
