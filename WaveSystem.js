class waveSystem {
  constructor(origin, numParticles) {
    this.origin = origin.copy();
    this.particles = [];

    for (let i = 0; i < numParticles; i++){
      let p = new wave(this.origin.copy().add(createVector(i*2 - numParticles, 0)));
      this.particles.push(p);
    }
}

  run() {

    for (let p of this.particles) {
      let waveForce = createVector(
        sin(frameCount*0.05 + p.position.x*0.05) * (mouseX - width/2) * 0.0005, 0);
      p.applyForce(waveForce);

      p.update();
      p.display();
        }
    }
}