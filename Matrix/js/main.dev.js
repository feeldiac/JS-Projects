const canvas = document.querySelector("#canvas");

const w = document.body.clientWidth;
const h = document.body.clientHeight;

canvas.width = w;
canvas.height = h;

const position = Array(300).join(0).split("");

const ctx = canvas.getContext("2d");
// Logica para rellenar de la Matrix

const initMatrix = () => {
  ctx.fillStyle = "rgba(0, 15, 2, 0.15)";
  ctx.fillRect(0, 0, w, h);

  ctx.fillStyle = "#4caf50";
  ctx.font = "11pt";

  position.map((y, index) => {
    const text = String.fromCharCode(1e3);
  });
};

setInterval(initMatrix, 300);
