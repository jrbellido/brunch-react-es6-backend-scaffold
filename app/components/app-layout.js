import React, { PropTypes, Component } from "react"
import NavMenu from "./nav-menu"
import Footer from "./footer"

export default class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    return (
      <div id="app">
        <h1>webpack-react-es6-backend-scaffold</h1>
        
        <NavMenu />
        
        <hr />

        {this.props.children}

        <Footer />
      </div>
    )
  }
}
