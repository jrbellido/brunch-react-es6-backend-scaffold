import React, { Component } from "react"
import { Route, IndexRoute, IndexRedirect } from "react-router"
import AppLayout from "./components/app-layout"
import BoardManager from "./components/board-manager"
import BoardEditor from "./components/board-editor"
import ItemManager from "./components/item-manager"
import ItemEditor from "./components/item-editor"
import ItemNew from "./components/item-new"
import About from "./components/about"

class NoMatch extends Component {
	render() {
		return <div>Route not found</div>
	}
}

export default (
  <Route name="app" component={AppLayout} path="/">
    <IndexRoute component={ItemManager} />
  	<Route path="item">
      <Route path="new" component={ItemNew} />
      <Route path=":id" component={ItemEditor} />
      <Route path="*" component={NoMatch} />
    </Route>
    <Route path="pins">
      <IndexRoute component={BoardManager} />
      <Route path=":id" component={BoardEditor} />
    </Route>
  	<Route path="about" component={About} />
  	<Route path="*" component={NoMatch} />
  </Route>
)
