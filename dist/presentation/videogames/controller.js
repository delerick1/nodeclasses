"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesController = void 0;
class VideogamesController {
    constructor(videogameService) {
        this.videogameService = videogameService;
        this.createVideogame = (req, res) => {
            const { name, price, description } = req.body;
            this.videogameService.createVideogame({ name, price, description })
                .then(videogame => {
                res.status(201).json(videogame);
            })
                .catch((error) => {
                res.status(500).json({ message: 'Internal Server Error' });
            });
        };
        this.getVideogames = (req, res) => {
            this.videogameService.findAllVideogames()
                .then(videogames => {
                res.status(200).json(videogames);
            })
                .catch((error) => {
                res.status(500).json(error);
            });
        };
        this.getVideogamesByid = (req, res) => {
            const { id } = req.params;
            if (isNaN(+id)) {
                res.status(400).json({ message: 'Enter a number' });
                return;
            }
            this.videogameService.findOneVideogameById(+id)
                .then(videogames => {
                res.status(200).json(videogames);
            })
                .catch((error) => {
                console.log(error);
                res.status(500).json(error);
            });
        };
        this.updateVideogamesByid = (req, res) => {
            const { id } = req.params;
            const { name, price, description } = req.body;
            if (isNaN(+id)) {
                res.status(400).json({ message: `Enter a number` });
                return;
            }
            this.videogameService.updateVideogame({ name, price, description }, +id)
                .then(videogame => {
                res.status(200).json(videogame);
                return;
            })
                .catch((error) => {
                console.log(error);
                res.status(500).json(error);
                return;
            });
        };
        this.deleteVideogamesByid = (req, res) => {
            const { id } = req.params;
            res.status(204).json({
                message: `Video Game ${id} deleted`,
            });
        };
    }
}
exports.VideogamesController = VideogamesController;
