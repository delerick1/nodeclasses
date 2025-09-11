"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.envs = void 0;
require("dotenv/config");
const env_var_1 = require("env-var");
exports.envs = {
    PORT: (0, env_var_1.get)('PORT').required().asPortNumber(),
    NODE_ENV: (0, env_var_1.get)('NODE_ENV').default('development').asString(),
    DB_HOST: (0, env_var_1.get)('DATABASE_HOST').required().asString(),
    DB_USERNAME: (0, env_var_1.get)('DATABASE_USERNAME').required().asString(),
    DB_PASSWORD: (0, env_var_1.get)('DATABASE_PASSWORD').required().asString(),
    DB_DATABASE: (0, env_var_1.get)('DATABASE_DATABASE').required().asString(),
    DB_PORT: (0, env_var_1.get)('DATABASE_PORT').required().asPortNumber(),
    FRONTEND_URL: (0, env_var_1.get)('FRONTEND_URL').default('http://abogadosinternacionales.com.mx').asString()
};
