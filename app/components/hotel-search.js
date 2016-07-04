import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"
import apitude from "../lib/apitudeClient"

import console from "../lib/console"

class HotelSearch extends Component {
  static propTypes = {
    boards: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
  ]

  render() {
    const { boards, dispatch } = this.props

    console.dump("HotelSearch->render", this)

    return (
      <div className="hotel-search">
        <div className="heading container-fluid no-h-padding">
          <div className="row">
            <div className="col-xs-6">
              <h3 className="no-v-margin">Hotel search</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(HotelSearch))
