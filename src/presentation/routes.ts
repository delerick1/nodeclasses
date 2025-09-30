import { Router } from 'express';
import {VideogamesRoutes} from './videogames/routes'
import { AuthRoutes } from './auth/routes';

export class AppRoutes {
  // STATIC 
  static get routes(): Router {
    const router = Router();

    router.use('/api/v1/videogames', VideogamesRoutes.routes);
    //* aca tambien iran todos los metodos que necesitamos para gestionar los videojuegos

    router.use('/api/v1/auth', AuthRoutes.routes);

    //* aca tambien iran todos los metodos que necesitamos para gestionar los los purchases

    return router;
  }
}