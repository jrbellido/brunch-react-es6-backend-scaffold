import React, { PropTypes, Component } from "react"
import { withRouter, Link } from "react-router"
import { connect } from "react-redux"

class NavMenuItemClass extends Component {
	constructor(props) {
		super(props)

		this.state = {
			"className": ""
		}
	}

	componentWillMount() {
	}

	componentWillUpdate() {
	}

	render() {
		console.dump("NavMenuItem->render", this)

		const className = this.props.router.isActive(this.props.to)?"active":""

		return (
			<li role="presentation" className={className}>
				<Link to={this.props.to}>{this.props.children}</Link>
			</li>
		)
	}
}

const NavMenuItem = withRouter(NavMenuItemClass)

class NavMenu extends Component {
	render() {
		console.dump("NavMenu->render", this)

		return (
			<nav className="navbar navbar-default">
				<div className="navbar-header">
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<NavMenuItem to={`/`}>Home</NavMenuItem>
							<NavMenuItem to={`/about`}>About</NavMenuItem>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default withRouter(NavMenu)
