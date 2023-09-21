import { Tesla, Audi, Toyota, Honda, Volvo, Ford } from './03-liskov-b-resuelto';
import { Vehicle } from './03-liskov-b-resuelto';


(() => {
    
    /**
     * La función acepta cualquier obj del tipo Vehicle
     */
    const printCarSeats = ( cars: Vehicle[] ) => {

        /**
         * Este código no es bueno ya que en caso de agregar nuevos Vehicles
         * tendremos que agregar al ciclo "for" para que el programa funcione.
         */
        // for (const car of cars) {
         
        //     if( car instanceof Tesla ) {
        //         console.log( 'Tesla', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Audi ) {
        //         console.log( 'Audi', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Toyota ) {
        //         console.log( 'Toyota', car.getNumberOfSeats() )
        //         continue;
        //     }
        //     if( car instanceof Honda ) {
        //         console.log( 'Honda', car.getNumberOfSeats() )
        //         continue;
        //     }         

        // }

        /**
         * Solución: cicle "forEach" para cada elemento car
         */
        cars.forEach( car => {
            console.log(
                car.constructor.name, 
                car.getNumberOfSeats() 
            );
        })
    }
    
    const cars = [
        new Tesla(7),
        new Audi(2),
        new Toyota(5),
        new Honda(5),
        new Volvo(2),
        new Ford(2),
    ];


    printCarSeats( cars );

})();