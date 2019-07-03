// あくまでも一例です
const express = require("express")
const bodyParser = require("body-parser")
const app = express()

app.use(express.static("public"))
app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json())

const messages = []

app.get("/messages", function (req, res) {
	res.send(messages)
})
app.post("/messages", function (req, res) {
	const message = req.body.message
	if(!message || !message.trim()) {
		res.send({
			status: "failed"
		})
		return
	}
	messages.push(message)
	res.send({
		status: "success"
	})
})

app.listen(3000)
