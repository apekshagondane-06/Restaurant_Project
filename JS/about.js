let currentFace = 0;
let angle = 0;
const cube = document.getElementById('cube');

function rotateCube() {
  angle += 90;
  cube.style.transform = `rotateY(-${angle}deg)`;
}
setInterval(rotateCube, 3000); 