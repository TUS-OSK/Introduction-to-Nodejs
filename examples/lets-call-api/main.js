// あくまでも一例です
const result = document.querySelector("#result")
async function call() {
	const res = await (await fetch("http://api.open-notify.org/iss-now.json")).json()
	console.log(res)
	result.innerText = `${res.iss_position.latitude < 0 ? "S" : "N"}${Math.abs(res.iss_position.latitude)} ${res.iss_position.longitude < 0 ? "W" : "E"}${Math.abs(res.iss_position.longitude)}`
}
