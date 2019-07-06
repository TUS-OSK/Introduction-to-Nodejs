// あくまでも一例です
const express = require("express")
const bodyParser = require("body-parser")

const app = express()
const http = require("http").Server(app)
const io = require("socket.io")(http)

app.use(express.static(__dirname + "/public"))
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

const users = []

io.on("connection", socket => {
	console.log("connected " + socket.id)
	socket.on("message", msg => {
		console.log("message: " + msg)
		io.emit("message", msg)
	})
})

http.listen(3000)
