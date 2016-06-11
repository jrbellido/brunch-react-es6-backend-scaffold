import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

import ItemForm from "./item-form"
import ItemList from "./item-list"

class ItemEditor extends Component {
  static propTypes = {
    items: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItem
  ]

  componentDidMount() {
    console.log("ItemEditor->componentDidMount")

    this.props.router.setRouteLeaveHook(this.props.route, this.routeWillLeave)
  }

  routeWillLeave(nextLocation) {
    console.dump("ItemEditor->routeWillLeave", nextLocation)

    // Uncomment to disallow route change
    //return false;
  }

  // Determines if methods `componentWillUpdate` and `componentDidUpdate` should be called
  shouldComponentUpdate() { return false }

  componentWillReceiveProps() {
    console.dump("ItemEditor->componentWillReceiveProps", this)

    this.forceUpdate()
  }

  getInitialState() { console.log("ItemEditor->getInitialState") }

  getDefaultProps() { console.log("ItemEditor->getDefaultProps") }

  componentWillMount() { console.log("ItemEditor->componentWillMount") }

  componentWillUpdate() { console.log("ItemEditor->componentWillUpdate") }

  componentDidUpdate() { console.log("ItemEditor->componentDidUpdate") }

  componentWillUnmount() { console.log("ItemEditor->componentWillUnmount") }

  render() {
    const { items, dispatch } = this.props

    console.dump("ItemEditor->render", this)

    return (
      <div className="item-editor">
        <h3>Item edit</h3>
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemEditor))
