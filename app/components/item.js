import React, { PropTypes } from "react";

export default class Item extends React.Component {
  static propTypes = {
  	item: PropTypes.shape({
  		id: PropTypes.number,
  		name: PropTypes.string,
  		value: PropTypes.number
  	}).isRequired
  }

  render() {
  	const item = this.props.item

    return (
      <li className="item"><span>Item</span> <button>edit</button></li>
    )
  }
}
