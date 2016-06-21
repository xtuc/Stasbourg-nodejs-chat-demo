const io = require("socket.io")()

// Online user counter
var onlineCounter = 0

io.on("connection", socket => {

  // Increment new user
  onlineCounter++

  // Broadcast updated counter
  socket.emit("counter", onlineCounter)
  socket.broadcast.emit("counter", onlineCounter)

  // Message received
  socket.on("message", message => {
    console.log(message)

    // Send message to connected users
    socket.broadcast.emit("message", message)
  })

  // User disconnected
  socket.on('disconnect', () => {
    console.log('user disconnected')

    // Decrement
    onlineCounter--
  })

})

// Bind server
io.listen(8100)
