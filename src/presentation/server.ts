import express, { Router } from 'express';

//import { AppRoutes } from './routes';
//import {Request, Response} from 'express'
interface Options {
  port: number;
  routes: Router;

}
export class Server {

  public readonly app = express();
  private readonly port: number;
  private readonly routes: Router;

  constructor(options: Options) {

    this.port = options.port;
    this.routes = options.routes;
  }

  async start(){

    //* Middlewares
    this.app.use( express.json() ); 
    this.app.use( express.urlencoded({ extended: true })); 
    this.app.use(this.routes);

    return new Promise<void>((resolve) => {
      this.app.listen(this.port, () => {
        console.log(`🚀 Server is running on port ${this.port} 😎`);
        resolve();
      });
    });

  }

}