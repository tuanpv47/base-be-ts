import express, { Request, Response } from 'express';
import * as bodyParser from 'body-parser';
import { handleErrors } from 'utils/error.middle';

class App {
  public app: express.Application;
  public port: number;
  constructor(controllers: Array<any>, port: any) {
    this.app = express();
    this.port = port;
    this.app.use(bodyParser.urlencoded({ extended: true }));
    this.app.use(bodyParser.json());

    this.app.get('/', (req: Request, res: Response) => {
      return res.status(200).send(`Hello world! argocd deployed | ${new Date()}`);
    });
    this.initControllers(controllers);
    this.app.all('*', (req: Request, res: Response) => {
      return res.json({
        status: 404,
        message: `Can't find ${req.originalUrl}`
      });
    });

    //* Error handling
    this.app.use(handleErrors);
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
  private initControllers(controllers: any) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }
}
export default App;
