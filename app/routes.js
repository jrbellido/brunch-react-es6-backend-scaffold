import React from "react"
import { Route, IndexRoute } from "react-router"
import AppView from "./app-view"
import ItemManager from "./components/item-manager"
import Component2 from "./components/component-2"
import Component3 from "./components/component-3"

class NoMatch extends React.Component {
	render() {
		return <div>
		Route not found
		</div>
	}
}

export default (
  <Route name="app" component={AppView} path="/">
  	<IndexRoute component={ItemManager}/>
  	<Route path="component-2" component={Component2}/>
  	<Route path="component-3" component={Component3}/>
  	<Route path="*" component={NoMatch}/>
  </Route>
)
