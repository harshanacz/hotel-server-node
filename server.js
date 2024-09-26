const express = require("express");
const dbConfig = require("./db.js");
const roomsRoute = require("./routes/roomsRoute.js");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());
app.use("/api/rooms", roomsRoute);

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Internal Server Error" });
});

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
