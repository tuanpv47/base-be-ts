import App from 'App';
import { PORT } from 'config/config';
import todoController from 'todos/todo.controller';

const app = new App([new todoController()], parseInt(PORT));
app.listen();
