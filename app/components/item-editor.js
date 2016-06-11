import React, { Component, PropTypes } from "react"
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

import ItemForm from "./item-form"
import ItemList from "./item-list"

class ItemEditor extends Component {
  static propTypes = {
    item: PropTypes.any.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItem
  ]

  componentDidMount() { 
    console.dump("ItemEditor->componentDidMount", this)

    const form = this.refs.itemEditForm

    form.name.value = this.props.item.name
    form.value.value = this.props.item.value
  }

  routeWillLeave(nextLocation) { console.dump("ItemEditor->routeWillLeave", nextLocation) }

  // Determines if methods `componentWillUpdate` and `componentDidUpdate` should be called
  shouldComponentUpdate() { return false }

  componentWillReceiveProps() { console.dump("ItemEditor->componentWillReceiveProps", this) }

  getInitialState() { console.log("ItemEditor->getInitialState") }

  getDefaultProps() { console.log("ItemEditor->getDefaultProps") }

  componentWillMount() {console.dump("ItemEditor->componentWillMount", this) }

  componentWillUpdate() { console.log("ItemEditor->componentWillUpdate") }

  componentDidUpdate() { console.log("ItemEditor->componentDidUpdate") }

  componentWillUnmount() { console.log("ItemEditor->componentWillUnmount") }

  render() {
    console.dump("ItemEditor->render", this)

    const { item, dispatch } = this.props

    return (
      <div className="item-editor">
        <div><Link to={`/`}>Return to list</Link></div>
        <h3>Item edit</h3>

        <form ref="itemEditForm">
          <input name="name" type="text" placeholder="Name" />
          <input name="value" type="text" placeholder="Value" />

          <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemEditor))
