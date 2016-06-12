import React, { PropTypes } from "react"

export default class About extends React.Component {
  render() {
    console.dump("About->render", this)

    return (
      <div id="about">
        <h2>About this</h2>
        <p>Nothing interesting&hellip;</p>
      </div>
    )
  }
}
