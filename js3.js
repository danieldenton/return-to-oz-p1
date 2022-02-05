const objects = [
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
const [winningSelections, incorrectSelections] = randomSplit(objects, 3);

winningSelections.forEach(function (obj) {
  obj.addEventListener("click", function () {
    alert("correct");
  });
});

incorrectSelections.forEach(function (obj) {
  obj.addEventListener("click", function () {
    alert("incorrect");
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

console.log(winningSelections, incorrectSelections);
