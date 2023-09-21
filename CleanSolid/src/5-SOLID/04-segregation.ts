
// interface Bird {
//     fly(): void;
//     eat(): void;
//     run(): void;
// }

// // Tucan
// class Tucan implements Bird {
//     public fly() {}
//     public eat() {}
//     public run() {}
// }

// // Colibri
// class Hummingbird implements Bird {
//     public fly() {}
//     public eat() {}
//     public run() {}
// }

// // Avestruz - NO vuela, no puede implementar de Bird
// class Ostrich implements Bird {
//     public fly() {
//         throw new Error('Esta ave no vuela')
//     }
//     public eat() {}
//     public run() {}
// }

// // Pinguino - NO vuela, pero SI nada, tendría queimplementar una nueva func a Bird.
// class Penguin implements Bird {
//     public fly() {
//         throw new Error('Esta ave no vuela')
//     }
//     public eat() {}
//     public run() {}
//     public swim() {} // Si lo agrego a Bird estoy obligado a colocarlo en cada clase que implemente Bird.
// }