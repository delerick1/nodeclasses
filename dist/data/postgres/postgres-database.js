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
exports.PostgresDatabase = void 0;
const typeorm_1 = require("typeorm");
const videogame_model_1 = require("./models/videogame.model");
class PostgresDatabase {
    constructor(options) {
        var _a;
        this.datasource = new typeorm_1.DataSource({
            type: "postgres",
            host: options.host,
            port: options.port,
            username: options.username,
            password: options.password,
            database: options.database,
            synchronize: (_a = options.synchronize) !== null && _a !== void 0 ? _a : true,
            ssl: {
                rejectUnauthorized: false,
            },
            // Update to your actual path and entity structure
            entities: [videogame_model_1.Videogame],
            logging: true,
        });
    }
    connect() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.datasource.initialize();
                console.log("Connected to database 👌😊");
            }
            catch (error) {
                console.error("Database connection error:", error);
            }
        });
    }
    disconnect() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.datasource.destroy();
            console.log("Disconnected from database");
        });
    }
}
exports.PostgresDatabase = PostgresDatabase;
