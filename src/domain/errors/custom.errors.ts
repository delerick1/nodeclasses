export class CutomError extends Error{

    constructor( 
        public readonly message: string,
        public readonly status: number
    ){
    super(message)
    }

    static badRequest(message: string){
        return new CustomError(message, 400)
        }
        static unAuthorized(message: string){
            return new CustomError(message, 400)
            }
            static notFound(message: string){
                return new CustomError(message, 400)
                }
    
}