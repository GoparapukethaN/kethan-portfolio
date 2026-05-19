const canvas = document.querySelector("#signal-map");
const context = canvas.getContext("2d");

const nodes = [
  { x: 0.12, y: 0.2, r: 3, vx: 0.00018, vy: 0.00012 },
  { x: 0.3, y: 0.12, r: 2, vx: -0.00012, vy: 0.00016 },
  { x: 0.52, y: 0.2, r: 3, vx: 0.00013, vy: -0.0001 },
  { x: 0.78, y: 0.16, r: 2, vx: -0.00016, vy: 0.00014 },
  { x: 0.88, y: 0.42, r: 4, vx: -0.00012, vy: -0.00011 },
  { x: 0.66, y: 0.56, r: 2, vx: 0.0001, vy: 0.00012 },
  { x: 0.42, y: 0.68, r: 4, vx: -0.00011, vy: -0.00012 },
  { x: 0.2, y: 0.78, r: 2, vx: 0.00014, vy: -0.0001 },
  { x: 0.84, y: 0.82, r: 3, vx: -0.0001, vy: 0.00009 },
];

function resize() {
  const ratio = window.devicePixelRatio || 1;
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
}

function draw() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  context.clearRect(0, 0, width, height);

  for (const node of nodes) {
    node.x += node.vx;
    node.y += node.vy;
    if (node.x < 0.06 || node.x > 0.94) node.vx *= -1;
    if (node.y < 0.08 || node.y > 0.92) node.vy *= -1;
  }

  context.lineWidth = 1;
  for (let i = 0; i < nodes.length; i += 1) {
    for (let j = i + 1; j < nodes.length; j += 1) {
      const a = nodes[i];
      const b = nodes[j];
      const ax = a.x * width;
      const ay = a.y * height;
      const bx = b.x * width;
      const by = b.y * height;
      const distance = Math.hypot(ax - bx, ay - by);
      if (distance < 310) {
        const alpha = 0.22 * (1 - distance / 310);
        context.strokeStyle = `rgba(0, 95, 80, ${alpha})`;
        context.beginPath();
        context.moveTo(ax, ay);
        context.lineTo(bx, by);
        context.stroke();
      }
    }
  }

  for (const node of nodes) {
    context.fillStyle = node.r > 2 ? "rgba(196, 85, 51, 0.62)" : "rgba(0, 143, 114, 0.62)";
    context.beginPath();
    context.arc(node.x * width, node.y * height, node.r, 0, Math.PI * 2);
    context.fill();
  }

  requestAnimationFrame(draw);
}

resize();
draw();
window.addEventListener("resize", resize);
