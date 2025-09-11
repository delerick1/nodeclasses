import { Router } from 'express';
import { VideogamesController } from './controller';
import { VideogameService } from '../services/videogame.service';

export class VideogamesRoutes {

  static get routes(): Router {
    
    const router = Router();
    
    const videogameService = new VideogameService();
    const controller = new VideogamesController(videogameService);

    // Routes
    router.get('/', controller.getVideogames);
    router.post('/', controller.createVideogame);
    router.get('/:id', controller.getVideogamesByid);
    router.patch('/:id', controller.updateVideogamesByid);
    router.delete('/:id', controller.deleteVideogamesByid);

    return router;
  }
}
