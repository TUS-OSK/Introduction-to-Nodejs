// あくまでも一例です
const text = document.querySelector("#text")
const button = document.querySelector("#button")
const timeline = document.querySelector("#timeline")

async function send() {
	const message = text.value
	if(!message || !message.trim()) {
		alert("Invalid message.")
		return
	}
	const req = {
		message
	}
	const res = await (await fetch("/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(req)
	})).json()
	console.log(res)
	text.value = ""
	await getTimeline()
}

async function getTimeline() {
	const res = await (await fetch("/messages")).json()
	console.log(res)
	timeline.innerHTML = ""
	for(const v of res.reverse()) {
		const status = document.createElement("div")
		status.innerText = v
		timeline.appendChild(status)
	}
}
