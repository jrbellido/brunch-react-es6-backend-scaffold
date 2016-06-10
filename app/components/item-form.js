import React from "react";

import console from "../lib/console"

import * as ItemActions from "../actions/ItemActions"

if (typeof window !== 'undefined')
	require("../styles/item-form.scss")

export default class ItemForm extends React.Component {
  handleSubmit(ev) {
  	console.dump("ItemForm->handleSubmit", ev)

  	ItemActions.createItem("Nombre", 0.5)

  	ev.preventDefault()
  }

  render() {
    return (
      <form className="item-form" onSubmit={this.handleSubmit}>
        <h3>Submit item</h3>
        <input type="text" />
        <button>Submit</button>
      </form>
    )
  }
}
