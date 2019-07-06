// あくまでも一例です
const text = document.querySelector("#text")
const button = document.querySelector("#button")
const timeline = document.querySelector("#timeline")

getTimeline()

async function send() {
	const message = text.value
	if(!message || !message.trim()) {
		alert("Invalid message.")
		return
	}
	const req = {
		message
	}
	const res = await fetch("/messages", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=utf-8"
        },
        body: JSON.stringify(req)
	})
	const json = await res.json()
	console.log(json)
	text.value = ""
	await getTimeline()
}

async function getTimeline() {
	const res = await fetch("/messages")
	const json = await res.json()
	console.log(json)
	timeline.innerHTML = ""
	for(const v of json.reverse()) {
		const status = document.createElement("div")
		status.innerText = v
		timeline.appendChild(status)
	}
}
