import React, { Component } from "react"
import console from "../lib/console"
import * as ItemActions from "../actions/ItemActions"

import Item from "./item"

export default class ItemForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(ev) {
  	console.dump("ItemForm->handleSubmit", this, ev)

    const form = this.refs.formElement
    this.props.createItem(form.name.value, form.value.value).then(() => {
      form.name.value = ""
      form.value.value = ""
    })

  	ev.preventDefault()
  }

  render() {
    return (
      <form className="item-form" onSubmit={(e) => this.handleSubmit(e)} ref="formElement">
        <h3>Submit item</h3>
        <input name="name" placeholder="Name" type="text" />
        <input name="value" placeholder="Value" type="text" />
        <button>Submit</button>
      </form>
    )
  }
}
