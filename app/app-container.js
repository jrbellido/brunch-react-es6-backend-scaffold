import React from "react"
import NavMenu from "./nav-menu"
import Viewport from "./viewport"

class AppContainer extends React.Component {
	render() {
		return <div>
			<NavMenu />
			<Viewport />
		</div>
	}
}

export default AppContainer
