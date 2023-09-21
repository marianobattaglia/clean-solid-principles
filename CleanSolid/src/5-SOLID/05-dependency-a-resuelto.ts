import { PostService } from './05-dependency-b-resuelto';
import { LocalDataBaseService, JsonDataBaseService, WebApiService } from './05-dependency-c-resuelto';


// Main
(async () => {

    /* LOCAL */
    // const provider = new LocalDataBaseService();

    /* DATABASE */
    // const provider = new JsonDataBaseService();

    /* WebApiService */
    const provider = new WebApiService();
    

    const postService = new PostService( provider );

    const posts = await postService.getPosts();

    console.log({ posts });


})();