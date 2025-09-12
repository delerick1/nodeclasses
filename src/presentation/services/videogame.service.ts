import { Any } from 'typeorm';
import { Videogame } from '../../data';
enum Status{
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
}
export class VideogameService {
  constructor() {}
  //ANY  Change type of data entry to any
  async createVideogame(videogameData: any) {
    try{
      
    console.log(videogameData)
    const videogame = new Videogame();
    videogame.title = videogameData.name.toLowerCase().trim();
    videogame.description = videogameData.description.toLowerCase().trim();
    videogame.price = videogameData.price;

    await videogame.save();
    return videogame;
    }catch(error: any){
      console.log(error)//Todo: error
    }
  }
  async findAllVideogames(){
    try{
      return await Videogame.find();

    }catch (error: any){
      console.log(error)
    }
  }
    async findOneVideogameById(id: number){
      try{
        const videogame = await Videogame.findOne({
          where:{
            id: id,
            status: Status.ACTIVE,
          }
        });
        if(!videogame){
          throw new Error('No game')
        }
        return videogame;
  
      }catch (error: any){
        throw new Error('Internal Server Error')
        console.log(error)
      
      }
    }
      async updateVideogame(videogameData: any, id: number){
          const videogame = await this.findOneVideogameById(id);
          videogame.description = videogameData.description.toLowerCase().trim();
          videogame.price = videogameData.price;
         try{
           await videogame.save()
           return videogame;
          } catch(error){
            console.log(error)
            throw new Error('Internal Server Error')
          }
    
        
        
    }
    async deleteVideogame(id: number){
      const videogame = await  this.findOneVideogameById(id)
      videogame.status = Status.INACTIVE //soft delete
      // videogame.remove() delete permanate
      try{
        await videogame.save()
        return;
      }catch(error){

      }
    }
}
