class WaveSystem {
  constructor(origin, numParticles, phaseOffset = 0) {
    this.origin = origin.copy();
    this.particles = [];
    this.phaseOffset = phaseOffset;

    for (let i = 0; i < numParticles; i++){
      let p = new wave(this.origin.copy().add(createVector(i*2 - numParticles, 0)));
      this.particles.push(p);
    }
}

  run() {
    let yDisplacement = sin(frameCount * 0.03 + this.phaseOffset) * 10; 

    for (let p of this.particles) {
      let waveForce = createVector(
        sin(frameCount*0.05 + p.position.x*0.05) * (mouseX - width/2) * 0.0005, 0);
      p.applyForce(waveForce);

      p.origin.y = this.origin.y + yDisplacement;

      p.update();
      p.display();
        }
    }
}