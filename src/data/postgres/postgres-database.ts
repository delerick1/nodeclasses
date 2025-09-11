import { DataSource } from "typeorm";
import { Videogame } from "./models/videogame.model";

interface Options {
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  synchronize?: boolean;
}

export class PostgresDatabase {
  private datasource: DataSource;

  constructor(options: Options) {
    this.datasource = new DataSource({
      type: "postgres",
      host: options.host,
      port: options.port,
      username: options.username,
      password: options.password,
      database: options.database,
      synchronize: options.synchronize ?? true,
      ssl: {
        rejectUnauthorized: false,
      },
      // Update to your actual path and entity structure
      entities: [Videogame ],
      logging: true,
    });
  }

  async connect() {
    try {
      await this.datasource.initialize();
      console.log("Connected to database 👌😊");
    } catch (error) {
      console.error("Database connection error:", error);
    }
  }

  async disconnect() {
    await this.datasource.destroy();
    console.log("Disconnected from database");
  } 
}
