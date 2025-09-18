export class CreateVideogameDto {
    constructor(
        public readonly name: string,
        public readonly price: number,
        public readonly description: string
    ) { }
    /*
    @description a method of validation for data  to create a videogame
    @param objectthis object is recieved by the cliente
    @return arragment with a message error and a object type CreateVideogameDto
example {
    "name": "New World",
    "price": 20,
    "description": "juego de amazon "
}
    */
//TODO
    static create(object: { [key: string]: any }): [string?, CreateVideogameDto?] {
        const { name, price, description } = object;
        if (!name) return ['Missing name', undefined]
        if (!price) return ['Missing price']
        if (price < 0) return ['Price must be positive']
        if (!description) return ['Missing description']
        if (description.length < 10) return ['Description must be at least 10 characteres']

        
        return [undefined, new CreateVideogameDto(name, price, description)]
    }
}