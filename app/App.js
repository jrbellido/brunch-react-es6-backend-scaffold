import AppContainer from "app-container"
import ReactDOM from "react-dom"

document.addEventListener('DOMContentLoaded', () => {
	console.log('Initialized app')

	ReactDOM.render(
		<AppContainer />,
		document.getElementById('app')
		)
})