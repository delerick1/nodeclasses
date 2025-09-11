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
const routes_1 = require("./presentation/routes");
const server_1 = require("./presentation/server");
const data_1 = require("./data");
const env_1 = require("./config/env");
main().catch(err => {
    console.error('Fatal error during startup:', err);
    process.exit(1);
});
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const postgres = new data_1.PostgresDatabase({
            host: env_1.envs.DB_HOST,
            port: env_1.envs.DB_PORT,
            username: env_1.envs.DB_USERNAME,
            password: env_1.envs.DB_PASSWORD,
            database: env_1.envs.DB_DATABASE
        });
        yield postgres.connect();
        const server = new server_1.Server({
            port: env_1.envs.PORT,
            routes: routes_1.AppRoutes.routes
        });
        yield server.start();
    });
}
