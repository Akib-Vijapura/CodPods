require("dotenv").config({ path: "./.env" });
const express = require("express");
const app = express();
const connectDB = require("./config/db");

const PORT = process.env.PORT || 5001;

// Connected to DB
connectDB();


// For accepting JSON Data
app.use(express.json());

app.use("/api/auth", require("./routes/authRoute"));

app.listen(PORT, () => {
  console.log(`🚀 Server is running on http://localhost:${PORT}`);
});
