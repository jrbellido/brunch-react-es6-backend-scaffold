import React from "react";

export default class ItemForm extends React.Component {
  render() {
    return (
      <form className="item-form">
        <h3>Submit item</h3>
        <input type="text" />
        <button>Submit</button>
      </form>
    )
  }
}
