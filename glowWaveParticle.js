class glowWaveParticle extends wave {
    constructor(origin) {
        super(origin);
        this.colorOffset = random(1000);
    }

display() {
    let r = map(sin(frameCount * 0.02 + this.colorOffset), -1, 1, 50, 200); 
    let g = map(cos(frameCount * 0.015 + this.colorOffset), -1, 1, 100, 255); 
    let b = map(sin(frameCount * 0.01 + this.colorOffset), -1, 1, 150, 255); 

    stroke(r, g, b, 200);
    strokeWeight(3);
    point(this.position.x, this.position.y);
    }
}