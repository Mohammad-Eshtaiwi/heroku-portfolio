const express = require("express");

const server = express();

const PORT = process.env.PORT || 3000;

server.use(express.static("public"));

server.get("/", (req, res) => {
  res.send("Hello World!");
});

server.listen(PORT);
