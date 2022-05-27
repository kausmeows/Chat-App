const express = require("express");
const app = express();
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log(`User Connected: ${socket.id}`);

  socket.on("join", ({ name, room }) => {
    console.log(name, room);
  });

  socket.on('disconnect', () => {
    console.log('User had left!');
});
  });

server.listen(5000, () => {
  console.log("SERVER IS RUNNING");
});