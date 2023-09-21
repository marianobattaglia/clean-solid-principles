
interface Bird {
    eat(): void;
}

interface FlyingBird {
    fly(): void;
}

interface RunningBird {
    run(): void;
}

interface SwimmerBird {
    swim(): void;
}

// Tucan
class Tucan implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

// Colibri
class Hummingbird implements Bird, FlyingBird {
    public fly() {}
    public eat() {}
}

// Avestruz
class Ostrich implements Bird, RunningBird {
    public eat() {}
    public run() {}
}

// Pinguino
class Penguin implements Bird, SwimmerBird {
    public eat() {}
    public swim() {}
}