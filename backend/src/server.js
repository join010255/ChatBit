import sequelize from "./config/database.js";
import "./models/index.js";
import dotenv from "dotenv";
dotenv.config({path : "../.env"}); 
import express from "express";

const app = express();

try {
  await sequelize.authenticate();
  console.log("Database connected");

  await sequelize.sync({ alter: true });

  console.log("Tables are created");
} catch (error) {
  console.error("Database error:", error);
}

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});