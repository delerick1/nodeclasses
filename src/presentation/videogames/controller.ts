import { Request, Response } from 'express';
import { VideogameService } from '../services/videogame.service';

export class VideogamesController {

  constructor(
    public readonly videogameService: VideogameService
    ){}

  createVideogame = (req: Request, res: Response): void => {
    const { name, price, description } = req.body;

    this.videogameService.createVideogame({name, price, description})
    .then(videogame =>{
      res.status(201).json(videogame)
    })
    .catch((error: any) =>{
      res.status(500).json({ message: 'Internal Server Error' });
    })
  };

  getVideogames = (req: Request, res: Response): void => {
    this.videogameService.findAllVideogames()
    .then(videogames => {
      res.status(200).json(videogames)
    })
    .catch((error: any) => {
      res.status(500).json(error)
    })
  }

  getVideogamesByid = (req: Request, res: Response) => {
    const {id} = req.params
    if(isNaN(+id)){
      res.status(400).json({message:'Enter a number'})
      return;
    }
    this.videogameService.findOneVideogameById(+id)
    .then(videogames => {
      res.status(200).json(videogames)
    })
    .catch((error: any) => {
      console.log(error)
      res.status(500).json(error)
    })
  };

  updateVideogamesByid = (req: Request, res: Response): void => {
    const { id } = req.params;
    const { name, price, description } = req.body;
  
    if(isNaN(+id)){
      res.status(400).json({message: `Enter a number`});
      return;
    }
    
    this.videogameService.updateVideogame({ name, price, description},+id)
    .then(videogame =>{
      res.status(200).json(videogame);
      return;
    })
    .catch((error: any) =>{
      console.log(error);
      res.status(500).json(error);
      return;
    })
  };

  deleteVideogamesByid = (req: Request, res: Response): void => {
    const { id } = req.params;
    if(isNaN(+id)){
     res.status(400).json({'ID not a Number'})
    }
    this.videogameService.deleteVideogame(+id)
    .then(() => {
      return res.status(204).json()
    })
    .catch((error: any) => {
      return res.status(500).json(error)
    })
  };
}
