// あくまでも一例です
const socket = io()

function pon(n) {
	socket.emit("message", n)
}

socket.on("message", msg => {
	console.log(msg)
})
