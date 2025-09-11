"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppRoutes = void 0;
const express_1 = require("express");
const routes_1 = require("./videogames/routes");
class AppRoutes {
    // STATIC 
    static get routes() {
        const router = (0, express_1.Router)();
        router.use('/api/v1/videogames', routes_1.VideogamesRoutes.routes);
        //* aca tambien iran todos los metodos que necesitamos para gestionar los videojuegos
        //* aca tambien iran todos los metodos que necesitamos para gestionar los los usuarios
        //* aca tambien iran todos los metodos que necesitamos para gestionar los los purchases
        return router;
    }
}
exports.AppRoutes = AppRoutes;
