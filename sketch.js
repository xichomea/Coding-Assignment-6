let waves = [];

function setup() {
  createCanvas(720, 400);
  let positions = [180, 360, 540];
  for (let i = 0; i < positions.length; i++) {
    waves.push(new glowWaveSystem(createVector(positions[i], height/2), 100));
  }
}

function draw() {
  background(30, 50, 100);
  for (let wave of waves) {
    wave.run();
  }
}