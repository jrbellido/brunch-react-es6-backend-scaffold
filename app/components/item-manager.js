import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

import ItemForm from "./item-form"
import ItemList from "./item-list"

class ItemManager extends Component {
  static propTypes = {
    items: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItems
  ]

  componentDidMount() {
    console.log("ItemManager->componentDidMount")

    //this.props.router.setRouteLeaveHook(this.props.route, this.routeWillLeave)
  }

  routeWillLeave(nextLocation) {
    //console.dump("ItemManager->routeWillLeave", nextLocation)

    // Uncomment to disallow route change
    //return false;
  }

  // Determines if methods `componentWillUpdate` and `componentDidUpdate` should be called
  // shouldComponentUpdate() { return false }

  componentWillReceiveProps() {
    console.dump("ItemManager->componentWillReceiveProps", this)

    this.forceUpdate()
  }

  getInitialState() { console.log("ItemManager->getInitialState") }

  getDefaultProps() { console.log("ItemManager->getDefaultProps") }

  componentWillMount() { console.log("ItemManager->componentWillMount") }

  componentWillUpdate() { console.log("ItemManager->componentWillUpdate") }

  componentDidUpdate() { console.log("ItemManager->componentDidUpdate") }

  componentWillUnmount() { console.log("ItemManager->componentWillUnmount") }

  render() {
    const { items, dispatch } = this.props

    console.dump("ItemManager->render", this)

    return (
      <div className="item-manager">
        <ol className="breadcrumb">
          <li className="active">Items</li>
        </ol>

        <h3>Item manager</h3>

        <Link to={`/item/new`}>New</Link>

        <ItemList items={items} dispatch={dispatch}
            {...bindActionCreators(ItemActions, dispatch)} />
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemManager))
