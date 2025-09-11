"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.VideogameService = void 0;
const data_1 = require("../../data");
var Status;
(function (Status) {
    Status["ACTIVE"] = "ACTIVE";
    Status["INACTIVE"] = "INACTIVE";
})(Status || (Status = {}));
class VideogameService {
    constructor() { }
    //ANY  Change type of data entry to any
    createVideogame(videogameData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                console.log(videogameData);
                const videogame = new data_1.Videogame();
                videogame.title = videogameData.name.toLowerCase().trim();
                videogame.description = videogameData.description.toLowerCase().trim();
                videogame.price = videogameData.price;
                yield videogame.save();
                return videogame;
            }
            catch (error) {
                console.log(error); //Todo: error
            }
        });
    }
    findAllVideogames() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield data_1.Videogame.find();
            }
            catch (error) {
                console.log(error);
            }
        });
    }
    findOneVideogameById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const videogame = yield data_1.Videogame.findOne({
                    where: {
                        id: id,
                        status: Status.ACTIVE,
                    }
                });
                if (!videogame) {
                    throw new Error('No game');
                }
                return videogame;
            }
            catch (error) {
                throw new Error('Internal Server Error');
                console.log(error);
            }
        });
    }
    updateVideogame(videogameData, id) {
        return __awaiter(this, void 0, void 0, function* () {
            const videogame = yield this.findOneVideogameById(id);
            videogame.description = videogameData.description.toLowerCase().trim();
            videogame.price = videogameData.price;
            try {
                yield videogame.save();
                return videogame;
            }
            catch (error) {
                console.log(error);
                throw new Error('Internal Server Error');
            }
        });
    }
}
exports.VideogameService = VideogameService;
