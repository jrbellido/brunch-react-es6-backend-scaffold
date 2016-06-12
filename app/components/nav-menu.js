import React, { PropTypes, Component } from "react"
import { withRouter, Link } from "react-router"
import { connect } from "react-redux"

class NavMenuItem extends Component {
	constructor(props) {
		super(props)
		this.state = { className: "" }
		//this.state = { className: this.props.router.isActive(this.props.to)?"active":"" }
	}

	updateActive(context) {
		return function(loc) {
			context.setState({ className: loc.pathname == context.props.to ? "active" : "" })
		}
	}

	componentDidMount() {
		this.props.router.registerTransitionHook(this.updateActive(this))
	}

	componentDidUnmount() {
		this.props.router.unregisterTransitionHook()	
	}

	render() {
		return (
			<li role="presentation" className={this.state.className}>
				<Link to={this.props.to}>{this.props.children}</Link>
			</li>
		)
	}
}

class NavMenu extends Component {
	render() {
		return (
			<nav className="navbar navbar-default">
				<div className="navbar-header">
					<div className="collapse navbar-collapse">
						<ul className="nav navbar-nav">
							<NavMenuItem to={`/`} {...this.props}>Home</NavMenuItem>
							<NavMenuItem to={`/about`} {...this.props}>About</NavMenuItem>
						</ul>
					</div>
				</div>
			</nav>
		)
	}
}

export default withRouter(NavMenu)
