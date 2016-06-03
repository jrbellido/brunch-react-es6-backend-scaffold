import React from "react"
import ReactDOM from "react-dom"
import AppContainer from "./app-container"

document.addEventListener("DOMContentLoaded", () => {
	console.log("Initialized app")

	ReactDOM.render(
		<AppContainer />,
		document.getElementById("app")
		)
})
