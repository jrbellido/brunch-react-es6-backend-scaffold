import React from "react"
import { Route, IndexRoute } from "react-router"
import AppLayout from "./components/app-layout"
import ItemManager from "./components/item-manager"
import ItemEditor from "./components/item-editor"
import About from "./components/about"

class NoMatch extends React.Component {
	render() {
		return <div>
		Route not found
		</div>
	}
}

export default (
  <Route name="app" component={AppLayout} path="/">
  	<IndexRoute component={ItemManager} />
  	<Route path="item/:id" component={ItemEditor} />
  	<Route path="about" component={About} />
  	<Route path="*" component={NoMatch}/>
  </Route>
)
