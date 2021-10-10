//import "./styles.css";

let genCount = 3;
let roundCount = 1;

document.getElementById("app").innerHTML = `
<h1>Energy Count</h1>
<div id="center">
  <h2 id="round-count">Round ${roundCount}</h2>
  <h2 id="energy-count">${genCount}/10</h2>
  <div id="btns">
    <button id="btn-minus" class="btn">-</button><button id="btn-plus" class="btn">+</button><button id="btn-next" class="btn">Next Round</button> <br>
    <button id="btn-reset" class="btn">Reset</button>
  </div>
</div>
`;

let genMinus = () => {
  genCount = genCount - 1;
  if (genCount <= 0) {
    genCount = 0;
  }
  document.getElementById("energy-count").innerHTML = `${genCount}/10`;
};

let genPlus = () => {
  genCount = genCount + 1;
  if (genCount >= 10) {
    genCount = 10;
  }
  document.getElementById("energy-count").innerHTML = `${genCount}/10`;
};

let genReset = () => {
  genCount = 3;
  roundCount = 1
  document.getElementById("energy-count").innerHTML = `${genCount}/10`;
  document.getElementById("round-count").innerHTML = `Round 1`;
};

let genNext = () => {
  document.getElementById("energy-count").innerHTML = `${(genCount < 9 ? genCount += 2 : genCount = 10 )}/10`;
  document.getElementById(
    "round-count"
  ).innerHTML = `Round ${(roundCount += 1)}`;
};



document.getElementById("btn-minus").addEventListener("click", genMinus);

document.getElementById("btn-plus").addEventListener("click", genPlus);

document.getElementById("btn-reset").addEventListener("click", genReset);

document.getElementById("btn-next").addEventListener("click", genNext);

document.getElementById("results").innerHTML= `
<button id="win" class="btn">Victory</button>
<button id="lose" class="btn">Defeat</button>
<button id="draw" class="btn">Draw</button>
`

let wins = 0
let loss = 0
let draw = 0

let winBtn = () => {
  document.getElementById("win-score").innerHTML = `Victories: ${wins+=1}`
}

let lossBtn = () => {
  document.getElementById("defeat-score").innerHTML = `Defeats: ${loss+=1}`
}

let drawBtn = () => {
  document.getElementById("draw-score").innerHTML = `Draws: ${draw+=1}`
}

document.getElementById("win").addEventListener("click", winBtn);
document.getElementById("lose").addEventListener("click", lossBtn);
document.getElementById("draw").addEventListener("click", drawBtn);

document.getElementById("score").innerHTML = `
<h1>Score</h1>
<h3 id="win-score">Victories: 0</h3>
<h3 id="defeat-score">Defeats: 0</h3>
<h3 id="draw-score">Draws: 0</h3>
<button id="reset-score" class="btn">Reset score</button>
`

//Reset score button

let resetScore = () => {

  document.getElementById("win-score").innerHTML = `Victories: 0`
  document.getElementById("defeat-score").innerHTML = `Defeats: 0`
  document.getElementById("draw-score").innerHTML = `Draws: 0`

}

document.getElementById("reset-score").addEventListener("click", resetScore)
