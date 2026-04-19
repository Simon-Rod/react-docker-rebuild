import express from "express";
import cors from "cors";
import pool from "./db.js";
import path from "path";
import { fileURLToPath } from "url";
import dotenv from "dotenv";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (req, res) => {
  res.json({ message: "API is running successfully 🚀" });
});

// READ: Fetch all crew members
app.get("/api/users", async (req, res) => {
  try {
    const result = await pool.query(
      "SELECT id, name, email, enlistment_date FROM users ORDER BY id ASC"
    );
    res.json(result.rows);
  } catch (error) {
    console.error("Database query failed:", error);
    res.status(500).json({ error: "Database query failed" });
  }
});

// CREATE: Add a new pirate to the crew
app.post("/api/users", async (req, res) => {
  try {
    // Note: We expect pirateName, email, and enlistmentDate from our React frontend!
    const { pirateName, email, enlistmentDate } = req.body;

    const result = await pool.query(
      "INSERT INTO users (name, email, enlistment_date) VALUES ($1, $2, $3) RETURNING id, name, email, enlistment_date",
      [pirateName, email, enlistmentDate]
    );

    res.status(201).json(result.rows[0]);
  } catch (error) {
    console.error("Insert failed:", error);
    res.status(500).json({ error: "Insert failed or email already exists" });
  }
});

app.listen(PORT, () => {
  console.log(`API listening on port ${PORT}`);
});