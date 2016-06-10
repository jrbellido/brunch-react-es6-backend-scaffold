import React, { Component } from "react";

import Item from "./item"

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

if (typeof window !== 'undefined')
	require("../styles/item-form.scss")

export default class ItemForm extends Component {
  constructor(props) {
    super(props)
  }

  handleSubmit(ev) {
  	console.dump("ItemForm->handleSubmit", this, ev)

    const form = this.refs.formElement
    this.props.createItem(form.name.value, form.value.value)

  	ev.preventDefault()
  }

  render() {
    return (
      <form className="item-form" onSubmit={(e) => this.handleSubmit(e)} ref="formElement">
        <h3>Submit item</h3>
        <input name="name" type="text" />
        <input name="value" type="text" />
        <button>Submit</button>
      </form>
    )
  }
}
