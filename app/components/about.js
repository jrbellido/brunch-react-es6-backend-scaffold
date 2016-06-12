import React, { PropTypes } from "react"

export default class About extends React.Component {
  componentWillMount() { console.log("About->componentWillMount") }

  componentDidMount() { console.log("About->componentDidMount") }

  componentWillReceiveProps() { console.log("About->componentWillReceiveProps") }

  componentWillUpdate() { console.log("About->componentWillUpdate") }

  componentDidUpdate() { console.log("About->componentDidUpdate") }

  componentWillUnmount() { console.log("About->componentWillUnmount") }

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
