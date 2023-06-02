const express = require("express");
const socketio = require("socket.io");

const app = express();
const server = app.listen(3000);
const io = socketio(server);

io.on("connection", (socket) => {
  console.log("Received connection:");
  //   let i = 0;
  //   const interval = setInterval(() => {
  //     i += 1;
  //     socket.emit(`WEBO900000${i}`);
  //     console.log(`emitted WEBO900000${i}`);
  //   }, 5 * 1000);

  socket.on("message", (data) => {
    console.log("Received message:", data);
    socket.emit("message", `WEBO900000${data}`);
    console.log("Received message:", data);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected");
    clearInterval(interval);
  });
});
