import React, { Component, PropTypes } from "react"
import { connect } from "react-redux"
import { withRouter, Link } from "react-router"

import console from "../lib/console"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

class ItemForm extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  constructor(props) {
    super(props)
  }

  handleSubmit(ev) {
  	console.dump("ItemForm->handleSubmit", this, ev)

    const form = this.refs.formElement

    this.props.dispatch(ItemActions.createItem(form.name.value, form.value.value)).then(() => {
      this.props.router.replace("/")
    })

  	ev.preventDefault()
  }

  render() {
    return (
      <form className="item-form" onSubmit={(e) => this.handleSubmit(e)} ref="formElement">
        <div><Link to={`/`}>Return to list</Link></div>
        <h3>Create a new item</h3>

        <div><input name="name" placeholder="Name" type="text" /></div>
        <div><input name="value" placeholder="Value" type="text" /></div>
        
        <Link to={`/`}>Cancel</Link> <input type="submit" value="Create" />
      </form>
    )
  }
}

export default connect(state => (state))(withRouter(ItemForm))
