import { Router } from 'express';
import {VideogamesRoutes} from './videogames/routes'

export class AppRoutes {
  // STATIC 
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/videogames', VideogamesRoutes.routes);
    //* aca tambien iran todos los metodos que necesitamos para gestionar los videojuegos

    //* aca tambien iran todos los metodos que necesitamos para gestionar los los usuarios

    //* aca tambien iran todos los metodos que necesitamos para gestionar los los purchases

    return router;
  }
}