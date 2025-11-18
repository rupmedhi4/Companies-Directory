import dotenv from "dotenv";
import app from "./app.js";
import connectDB from "./src/config/db.js";

dotenv.config();

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB();

    app.listen(port, () => {
      console.log(` Server running at http://localhost:${port}`);
    });

  } catch (error) {
    console.log(" Error starting server:", error.message);
  }
};

startServer();
