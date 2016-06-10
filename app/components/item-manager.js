import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter } from "react-router"

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

  getInitialState() {
    console.log("ItemManager->getInitialState()")
  }

  getDefaultProps() {
    console.log("ItemManager->getDefaultProps()")
  }

  componentWillMount() {
    console.log("ItemManager->componentWillMount()")

    //this.props.dispatch(ItemActions.getItems(), this.props)
  }

  componentDidMount() {
    console.log("ItemManager->componentDidMount()")

    this.props.router.setRouteLeaveHook(this.props.route, this.routeWillLeave)

    if (this.props.items.length == 0) {
      //this.props.dispatch(ItemActions.getItems(), this.props)
    }
  }

  routeWillLeave(nextLocation) {
    console.groupCollapsed("ItemManager->routeWillLeave()")
    console.dir(nextLocation)
    console.groupEnd()

    // Uncomment to disallow route change
    //return false;
  }

  componentWillReceiveProps() {
    console.log("ItemManager->componentWillReceiveProps()")
  }

  // Determines if methods `componentWillUpdate` and `componentDidUpdate` should be called
  shouldComponentUpdate() {
    return true
  }

  componentWillUpdate() {
    console.log("ItemManager->componentWillUpdate()")
  }

  componentDidUpdate() {
    console.log("ItemManager->componentDidUpdate()")
  }

  handleItemManager() {
    console.log("Yay!")
  }

  componentWillUnmount() {
    console.log("ItemManager->componentWillUnmount()") 
  }

  render() {
    const { items, dispatch } = this.props

    console.groupCollapsed('ItemManager->render()')
    console.dir(this)
    console.groupEnd()

    return (
      <div className="item-manager">
        <h3>Item Manager</h3>

        <ItemList items={items}
            {...bindActionCreators(ItemActions, dispatch)} />

        <ItemForm 
            {...bindActionCreators(ItemActions, dispatch)} />
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemManager))
