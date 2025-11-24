class glowWaveSystem extends waveSystem {
    constructor(origin, numParticles) {
        super(origin, numParticles);

        this.particles = this.particles.map(p => new glowWaveParticle(p.origin));
    }
}