import sequelize from "./config/database.js";


async function main() {
    try {
        await sequelize.authenticate();
        console.log("Database connected");

        await sequelize.sync({ alter: true });
        console.log("Tables are created");

    } catch (err) {
        console.error("Database error:", err);
    }
}

main();