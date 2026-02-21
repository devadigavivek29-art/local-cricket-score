let runs = 0;
let wickets = 0;
let balls = 0;

function addRun(r) {
  runs += r;
  balls++;
  save();
  update();
}

function addWicket() {
  wickets++;
  balls++;
  save();
  update();
}

function update() {
  document.getElementById("score").innerText = `${runs} / ${wickets}`;
  let o = Math.floor(balls / 6);
  let b = balls % 6;
  document.getElementById("overs").innerText = `Overs: ${o}.${b}`;
}

function save() {
  localStorage.setItem("match", JSON.stringify({runs,wickets,balls}));
}

function load() {
  let d = JSON.parse(localStorage.getItem("match"));
  if(d){
    runs = d.runs;
    wickets = d.wickets;
    balls = d.balls;
    update();
  }
}

function resetMatch() {
  localStorage.removeItem("match");
  runs = wickets = balls = 0;
  update();
}

load();