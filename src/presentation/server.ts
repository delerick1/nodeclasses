import express, { Router } from 'express';
import cors from 'cors';

import { AppRoutes } from './routes';
import {Request, Response} from 'express'

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

    //* CORS Configuration
    const corsOptions = {
      origin: [
        'http://abogadosinternacionales.com.mx',
        'https://abogadosinternacionales.com.mx',
        'http://localhost:3000',
        'http://localhost:5173'
      ],
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization']
    };

    //* Middlewares
    this.app.use(cors(corsOptions));
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