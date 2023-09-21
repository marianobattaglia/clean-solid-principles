/**
 * Esta clase tenía una fuerte dependencia con la libreria axios. 
 */
// import axios from 'axios';

/**
 * Para repetar el principio Open-Close se elimino la dependencia creando
 * una nueva clase llamada HttpClient. Para utilizar esta, se agrega 
 * un constructor en cada clase que se desee utilizar. 
 */
import { HttpClient } from "./02-open-close-c";

export class TodoService { 

    constructor( private http: HttpClient ) {}

    async getTodoItems() {
        // const { data } = await axios.get('https://jsonplaceholder.typicode.com/todos/');
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/todos/');
        return data;
    }
}


export class PostService {

    constructor( private http: HttpClient ) {}

    async getPosts() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/posts');
        return data;
    }
}


export class PhotosService {

    constructor( private http: HttpClient ) {}

    async getPhotos() {
        const { data } = await this.http.get('https://jsonplaceholder.typicode.com/photos');
        return data;
    }

}