import mongoose from "mongoose";

// ==========
// Connexion à mongoose
// =========

mongoose
  .connect(
    "mongodb+srv://" + process.env.DB_USER + "@form.ghmv5pa.mongodb.net/form"
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Failed to connect to MOngoDB", err));
