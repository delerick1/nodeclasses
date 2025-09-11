"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogamesRoutes = void 0;
const express_1 = require("express");
const controller_1 = require("./controller");
const videogame_service_1 = require("../services/videogame.service");
class VideogamesRoutes {
    static get routes() {
        const router = (0, express_1.Router)();
        const videogameService = new videogame_service_1.VideogameService();
        const controller = new controller_1.VideogamesController(videogameService);
        // Routes
        router.get('/', controller.getVideogames);
        router.post('/', controller.createVideogame);
        router.get('/:id', controller.getVideogamesByid);
        router.patch('/:id', controller.updateVideogamesByid);
        router.delete('/:id', controller.deleteVideogamesByid);
        return router;
    }
}
exports.VideogamesRoutes = VideogamesRoutes;
