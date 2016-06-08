import React, { PropTypes } from "react"
import { Link } from "react-router"

if (typeof window !== 'undefined')
	require("../styles/nav-menu.scss")

export default class NavMenu extends React.Component {
	render() {
		return (
			<div>
				<ul className='nav-bar'>
					<li><Link to={`/`}>Home</Link></li>
					<li><Link to={`/about`}>About</Link></li>
				</ul>

				<select>
					<option>Account</option>
				</select>
			</div>
		)
	}
}
