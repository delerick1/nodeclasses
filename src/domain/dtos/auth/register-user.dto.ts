export class RegisterUserDto {
    constructor(
        public readonly name: string,
        public readonly price: number   
         ) { }

    /*
    @description a method of validation for data  to update a videogame
    @param objectthis object is recieved by the cliente
    @return arragment with a message error and a object type UpdateVideogameDto
example {
    "name": "New World",
    "price": 20, 
    "description": "juego de amazon "
}
    */
//TODO
    static create(object: { [key: string]: any }): [string?, RegisterUserDto?] {
        const { name, price } = object;
        if (!name) return ['Missing name', undefined]
        if (!price) return ['Missing price']
        if (price < 0) return ['Price must be positive']
        
        
        return [undefined, new RegisterUserDto(name, price)]
    }
}