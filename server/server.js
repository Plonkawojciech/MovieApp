const express = require('express');
const cors = require("cors");
const db = require('better-sqlite3')("ourApp.db")
db.pragma('journal_mode = WAL')
const authRoutes = require("./routes/auth");
const app = express();
const PORT = 5000;

app.use(cors())
app.use(express.json());
app.use("/api", authRoutes)

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});


