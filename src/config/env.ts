import 'dotenv/config'
import {get} from 'env-var';
export const envs ={
    PORT: get('PORT').required().asPortNumber(),
    NODE_ENV: get('NODE_ENV').default('development').asString(),
    DB_HOST: get('DATABASE_HOST').required().asString(),
    DB_USERNAME: get('DATABASE_USERNAME').required().asString(),
    DB_PASSWORD: get('DATABASE_PASSWORD').required().asString(),
    DB_DATABASE: get('DATABASE_DATABASE').required().asString(),
    DB_PORT: get('DATABASE_PORT').required().asPortNumber(),
    FRONTEND_URL: get('FRONTEND_URL').default('http://abogadosinternacionales.com.mx').asString()
}