import React from "react"
import ReactDOM from "react-dom"

class Container extends React.Component {
	render() {
		return <div>Hello world</div>
	}
}

document.addEventListener('DOMContentLoaded', () => {
	console.log('Initialized app')

	ReactDOM.render(
		<Container />,
		document.getElementById('app')
		)
})
