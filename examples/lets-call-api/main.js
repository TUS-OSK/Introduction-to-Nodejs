// あくまでも一例です
const result = document.querySelector("#result")
async function call() {
	const res = await fetch("http://api.open-notify.org/iss-now.json")
	const json = await res.json()
	console.log(json)
	result.innerText = `${json.iss_position.latitude < 0 ? "S" : "N"}${Math.abs(json.iss_position.latitude)} ${json.iss_position.longitude < 0 ? "W" : "E"}${Math.abs(json.iss_position.longitude)}`
}
