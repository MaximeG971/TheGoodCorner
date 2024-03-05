import { Category } from "../entities/category";
import { Ad } from "../entities/ad";
import { Tag } from "../entities/tag";
import { DataSource } from "typeorm";

export const dataSource = new DataSource({
  type: "sqlite",
  database: "db.sqlite",
  entities: [Ad, Category, Tag],
  synchronize: true,
  logging: ["error", "query"],
});
