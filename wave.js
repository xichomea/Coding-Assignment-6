class wave {
  constructor(origin) {
    this.origin = origin.copy();
    this.position = origin.copy();
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
    this.colorOffset = random(1000);
    }

    applyForce(force){
      this.acceleration.add(force);
    }

    update() {
      this.velocity.add(this.acceleration);
      this.position.add(this.velocity);
      this.acceleration.mult(0);

      let back = p5.Vector.sub(this.origin, this.position);
      back.mult(0.02);
      this.velocity.add(back);
      this.velocity.mult(0.98);
    }

    display() {
    let r = map(sin(frameCount * 0.02 + this.colorOffset), -1, 1, 50, 200); 
    let g = map(cos(frameCount * 0.015 + this.colorOffset), -1, 1, 100, 255); 
    let b = map(sin(frameCount * 0.01 + this.colorOffset), -1, 1, 150, 255); 

      stroke(r, g, b);
      strokeWeight(2);
      point(this.position.x, this.position.y);
    }
}