import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import console from "../lib/console"

import * as PinterestActions from "../actions/PinterestActions"

class BoardEditor extends Component {
  static propTypes = {
    pins: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    PinterestActions.getPins
  ]

  render() {
    const { pins, dispatch } = this.props

    console.dump("BoardEditor->render", this)

    return (
      <div>
        Board editor

        {
          pins.map( (pin) => {
            return (<div key={pin.id}><img src={`http://localhost:3131/pinterest/thumb?url=${pin.image.original.url}`} /></div>)
          })
        }
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(BoardEditor))
