class wave {
  constructor(origin) {
    this.origin = origin.copy();
    this.position = origin.copy();
    this.velocity = createVector(0, 0);
    this.acceleration = createVector(0, 0);
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
      stroke(0, 150, 255);
      strokeWeight(2);
      point(this.position.x, this.position.y);
    }
}