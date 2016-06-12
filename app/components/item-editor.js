import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

import ItemForm from "./item-form"
import ItemList from "./item-list"

class ItemEditor extends Component {
  static propTypes = {
    item: PropTypes.object.isRequired,
    dispatch: PropTypes.func.isRequired
  }

  static needs = [
    ItemActions.getItem
  ]

  handleSaveChanges(ev) {
    console.dump("ItemEditor->handleSaveChanges", this, ev)

    const form = this.refs.itemEditForm

    const updatedItem = { name: form.name.value, value: form.value.value }

    this.props.dispatch(ItemActions.updateItem(this.props.params.id, updatedItem)).then(() => {
      this.props.router.replace("/")
    })

    ev.preventDefault()
  }

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

        <form ref="itemEditForm" onSubmit={ (ev) => this.handleSaveChanges(ev) }>
          <div>
            <input name="name" type="text" placeholder="Name" />
          </div>
          <div>
            <input name="value" type="text" placeholder="Value" />
          </div>

          <Link to={`/`}>Cancel</Link> <input type="submit" value="Save" />
        </form>
      </div>
    )
  }
}

export default connect(state => (state))(withRouter(ItemEditor))
