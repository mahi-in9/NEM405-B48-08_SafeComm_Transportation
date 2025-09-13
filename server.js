const dotenv = require("dotenv");
const express = require("express");
const cors = require("express");
const connectDB = require("./config/db");

const authRouter = require("./routes/authRouter")

const app = express();

dotenv.config();
app.use(express.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.send("App is running...");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`server is running on http://localhost:${PORT}`)
);
