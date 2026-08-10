import sequelize from "./config/database.js";
import "./models/index.js";

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync({ alter: true });

  console.log("Tables are created");
} catch (error) {
  console.error("Database error:", error);
}