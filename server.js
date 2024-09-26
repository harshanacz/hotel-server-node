const express = require("express"); 
const dbConfig = require("./db.js"); 
const roomsRoute = require("./routes/roomsRoute.js");

const app = express();

app.use("/api/rooms", roomsRoute);

const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
