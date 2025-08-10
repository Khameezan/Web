const container = document.getElementById('viewer');
const canvas = document.createElement('canvas');
container.appendChild(canvas);
const ctx = canvas.getContext('2d');

function drawScene() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const groundHeight = canvas.height * 0.2;
  ctx.fillStyle = '#228B22';
  ctx.fillRect(0, canvas.height - groundHeight, canvas.width, groundHeight);

  const houseWidth = canvas.width * 0.3;
  const houseHeight = canvas.height * 0.3;
  const houseX = (canvas.width - houseWidth) / 2;
  const houseY = canvas.height - groundHeight - houseHeight;

  ctx.fillStyle = '#8d5524';
  ctx.fillRect(houseX, houseY, houseWidth, houseHeight);

  ctx.fillStyle = '#cd5c5c';
  ctx.beginPath();
  ctx.moveTo(houseX, houseY);
  ctx.lineTo(houseX + houseWidth / 2, houseY - houseHeight * 0.5);
  ctx.lineTo(houseX + houseWidth, houseY);
  ctx.closePath();
  ctx.fill();
}

function resize() {
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  drawScene();
}

window.addEventListener('resize', resize);
resize();

window.viewerScene = {
  objects: {
    house: { name: 'house' },
    ground: { name: 'ground' }
  },
  getObjectByName(name) {
    return this.objects[name] || null;
  }
};
