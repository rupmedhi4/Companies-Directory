import express from "express";
import cors from "cors";
import companyRoutes from "./src/routes/company.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api", companyRoutes);

app.get("/", (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Companies Directory Backend is Running...",
  });
});

app.use((req, res) => {
  res.status(404).json({
    status: "fail",
    message: "Route not found",
  });
});

app.use((err, req, res, next) => {
  console.error("Server Error:", err);

  res.status(err.statusCode || 500).json({
    status: "error",
    message: err.message || "Internal Server Error",
  });
});

export default app;
