import React from "react"
import { Link } from "react-router"

if (typeof window !== 'undefined')
	require("./styles/nav-menu.scss")

class NavMenu extends React.Component {
	render() {
		return <ul className='nav-bar'>
			<li><Link to={`/`}>Home</Link></li>
			<li><Link to={`/component-1`}>Component #1</Link></li>
			<li><Link to={`/component-2`}>Component #2</Link></li>
			<li><Link to={`/component-3`}>Component #3</Link></li>
		</ul>
	}
}

export default NavMenu
