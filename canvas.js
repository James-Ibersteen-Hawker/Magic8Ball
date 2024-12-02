const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

let time = 0;
canvas.setAttribute("width", `${window.innerWidth}px`);
canvas.setAttribute("height", `${window.innerHeight}px`);

function increment() {
  let distance = Math.floor(window.innerHeight - window.innerHeight / 10);
  let increment = Math.round(distance / 29.7);
  return [increment, distance];
}

function drop() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  //rect open
  table();
  //arc open
  ball();
  //movement open
  let results = increment();
  let incr = results[0];
  let distance = results[1];
  time += incr;
  if (time <= Math.round(window.innerHeight - window.innerHeight / 10)) {
    requestAnimationFrame(drop);
  } else {
    return;
  }
}

function table() {
  ctx.beginPath();
  ctx.rect(
    0,
    window.innerHeight - window.innerHeight / 10,
    window.innerWidth,
    window.innerHeight - window.innerHeight / 10
  );
  ctx.fillStyle = "green";
  ctx.fill();
  ctx.stroke();
}
function ball() {
  let width = window.innerWidth / 10;
  let percentage = window.innerWidth - window.innerWidth / 5;
  ctx.beginPath();
  ctx.arc(percentage /*xpos*/, time /*ypos*/, width /*radius*/, 0, 2 * Math.PI);
  ctx.stroke();
}

drop();
