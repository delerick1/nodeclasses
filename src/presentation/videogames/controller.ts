import { Request, Response } from 'express';
import { VideogameService } from '../services/videogame.service';
import { CreateVideogameDto, CustomError, UpdateVideogameDto } from '../../domain';

export class VideogamesController {

  constructor(
    public readonly videogameService: VideogameService
    ){}
    private handleError = (error: any, res: Response) => {
      if( error instanceof CustomError){
        return  res.status(error.statusCode).json({ message: error.message});
      } 
      console.log(error)
      return res.status(500).json({ message: 'Something went very wrong!🧨'});
    }
  createVideogame = (req: Request, res: Response): void => {
   const[error, createVideogameDto] = CreateVideogameDto.create(req.body)
   if(error) res.status(422).json({message:error})

    this.videogameService.createVideogame(createVideogameDto!)
    .then(videogame => res.status(201).json(videogame))
    .catch((error: any) => this.handleError(error, res))
  };
  getVideogames = (req: Request, res: Response): void => {
    this.videogameService.findAllVideogames()
    .then(videogames => res.status(200).json(videogames))
    .catch((error: any) => this.handleError(error, res))
  }

  getVideogamesByid = (req: Request, res: Response) => {
    const {id} = req.params
    if(isNaN(+id)){
      res.status(400).json({message:'Enter a number'})
    }
    this.videogameService.findOneVideogameById(+id)
    .then(videogames => res.status(200).json(videogames))
    .catch((error: any) => this.handleError(error, res) )
  };

  updateVideogamesByid = (req: Request, res: Response): void => {
    const { id } = req.params;
    const [error, updateVideogameDto] = UpdateVideogameDto.create(req.body);
  
    if(isNaN(+id)){
    res.status(400).json({message: `Enter a number`});
    }
    
    this.videogameService.updateVideogame(updateVideogameDto!,+id)
    .then(videogame => res.status(200).json(videogame))
    .catch((error: any) => res.status(500).json(error))
  };

  deleteVideogamesByid = (req: Request, res: Response): void => {
    const { id } = req.params;
    if(isNaN(+id)){
     res.status(400).json( {message:'ID not a Number'});
    }   
    this.videogameService.deleteVideogame(+id)
    .then(() => res.status(204).json())
    .catch((error: any) => res.status(500).json(error))
  };
}
