const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  io.emit("rube", "Go go go!");
  res.send("It really whips the llamas ass!");
});

app.get("/end", function (req, res) {
  io.emit("end", "We did it!");
});

//Whenever someone connects this gets executed
io.on("connection", function (socket) {
  console.log("A user connected");

  //Whenever someone disconnects this piece of code executed
  socket.on("disconnect", function () {
    console.log("A user disconnected");
  });
});

http.listen(port, function () {
  console.log(`listening on *:${port}`);
});
