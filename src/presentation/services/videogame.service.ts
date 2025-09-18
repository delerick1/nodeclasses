import { Any } from 'typeorm';
import { Videogame } from '../../data';
import { CreateVideogameDto, CustomError, UpdateVideogameDto} from '../../domain';
enum Status {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
export class VideogameService {
  constructor() { }
// todo-tree
  /*
 TODO ANY  Change type of data entry to any
  */
  async createVideogame(videogameData: CreateVideogameDto) {
    const videogame = new Videogame();

    videogame.title = videogameData.name.toLowerCase().trim();
    videogame.description = videogameData.description.toLowerCase().trim();
    videogame.price = videogameData.price;
    try {
      return await videogame.save();
    } catch (error: any) {
      throw CustomError.InternalServer("🧨🧨Somenthing went very wrong 🧨🧨 ")
    }
  }
  async findAllVideogames() {
    try {
      return await Videogame.find();

    } catch (error: any) {
      console.log(error)
      throw CustomError.InternalServer("🧨🧨Somenthing went very wrong 🧨🧨 ")
    }
  }
  async findOneVideogameById(id: number) {
      const videogame = await Videogame.findOne({
        where: {
          id: id,
          status: Status.ACTIVE,
        }
      });
      if (!videogame) {
        throw CustomError.notFound(`videogame with id ${id} not found`)
      }
      return videogame;
  }
  async updateVideogame(videogameData: UpdateVideogameDto, id: number) {
    const videogame = await this.findOneVideogameById(id);
    videogame.title = videogameData.name.toLowerCase().trim();
    videogame.price = videogameData.price;
    try {
      return await videogame.save()
    } catch (error) {
      console.log(error)
      throw CustomError.InternalServer("🧨🧨Somenthing went very wrong 🧨🧨 ")   
     }
  }
  async deleteVideogame(id: number) {
    const videogame = await this.findOneVideogameById(id)
    videogame.status = Status.INACTIVE //soft delete
    // videogame.remove() delete permanate
    try {
      await videogame.save()
      return;
    } catch (error) {
      throw CustomError.InternalServer("🧨🧨Somenthing went very wrong 🧨🧨 ")
    }
  }
}
