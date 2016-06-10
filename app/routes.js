import React from "react"
import { Route, IndexRoute } from "react-router"
import AppLayout from "./components/app-layout"
import ItemManager from "./components/item-manager"
import About from "./components/about"

class NoMatch extends React.Component {
	render() {
		return <div>
		Route not found
		</div>
	}
}

function itemManagerOnEnterHandler(nextState, replace, callback) {
	console.dump("itemManagerOnEnterHandler", nextState, replace, callback)
	callback()
}

export default (
  <Route name="app" component={AppLayout} path="/">
  	<IndexRoute component={ItemManager} onEnter={itemManagerOnEnterHandler} />
  	<Route path="about" component={About} />
  	<Route path="*" component={NoMatch}/>
  </Route>
)
