const express = require('express');
const cors = require("cors");
const authRoutes = require("./routes/auth");
const app = express();
const PORT = 5000;

app.use((req, res, next) => {
  console.log(`🔥 ${req.method} ${req.url}`);
  next();
});


app.use(cors())
app.use(express.json());
app.use("/api", authRoutes)

app.listen(PORT, () => {
  console.log(`Server działa na http://localhost:${PORT}`);
});


