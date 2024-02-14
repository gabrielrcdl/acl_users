import { DataSource, DataSourceOptions } from "typeorm";

export const ormOptions: DataSourceOptions = {
  type: "postgres",
  host: "localhost",
  port: 5432,
  username: "postgres",
  password: "root",
  database: "permissions",
  entities: ["dist/**/*.entity.js"],
  logging: true,
  synchronize: false,
  migrationsRun: false,
  migrations: ["src/database/migrations/**/*{.ts,.js}"],
};

export const AppDataSource = new DataSource(ormOptions);
