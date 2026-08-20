import dotenv from "dotenv";
import express from "express";
import sequelize from "./config/database.js";
import "./models/index.js";

dotenv.config({path : "../.env"});

const main = async() => {
  const app = express();

  app.use(express.json());
  app.use()
  try {
    await sequelize.authenticate();
    console.log("Database connected");

    await sequelize.sync({ alter: true });

    console.log("Tables are created");
  } catch (error) {
    console.error("Database error:", error);
  }

  app.listen(process.env.PORT, () => {
    console.log(`Server is running on port http://localhost:${process.env.PORT}`);
  });
}

main().catch(err => {
  console.error("Error:", err);
});