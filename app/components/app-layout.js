import React, { PropTypes, Component } from "react"
import { withRouter } from "react-router"
import NavMenu from "./nav-menu"
import Footer from "./footer"

class AppLayout extends Component {
  static propTypes = {
    children: PropTypes.object
  }

  render() {
    console.dump("AppLayout->render", this)

    return (
      <div id="app" className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="brand app-header">
              <h1>webpack-react-es6-backend-scaffold</h1>
          
              <NavMenu route={this.props.route} location={this.props.location} />
            </div>
          </div>
        </div>

        {this.props.children}

        <Footer />
      </div>
    )
  }
}

export default withRouter(AppLayout)
