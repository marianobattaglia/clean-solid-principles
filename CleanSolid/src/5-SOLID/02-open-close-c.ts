/**
 * En la clase Nº52 se remueve la libreria de axios con `npm remove axios`.
 * Gracias al patron Open-Close NO se necesita modificar nada fuera de esta clase. 
 */
// import axios from 'axios';

export class HttpClient {

    /**
     * Metodo dependiente de la libreria Axios. 
     */
    // async get( url: string ) {
    //     const { data, status } = await axios.get(url);
    //     console.log({ status });
    //     return { data, status };
    // }

    /**
     * Metodo sin dependencias 
     */
    async get( url: string ) {
        const resp = await fetch( url );
        const data = await resp.json();

        return { data, status: resp.status };
    }

}