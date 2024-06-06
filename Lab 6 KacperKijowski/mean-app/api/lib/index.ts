import App from './app';
import PostController from "./controllers/post.controller";


const app: App = new App([
   new PostController()
]);

app.listen();