import React from "react"
import { render } from "react-dom"
import { Router } from "react-router"
import { browserHistory, RouterContext, match } from "react-router"
import { fromJS } from "immutable"
import { Provider } from "react-redux"
import { createStore, combineReducers, applyMiddleware }  from "redux"
import assign from "object-assign"
import ItemReducer from "./reducers/ItemReducer"
import promiseMiddleware from "./lib/promiseMiddleware"
import immutifyState from "./lib/immutifyState"
import fetchComponentData from "./lib/fetchComponentData"

import routes from "./routes"

const initialState = immutifyState(window.__INITIAL_STATE__)

const reducer = combineReducers([ItemReducer])
const store = applyMiddleware(promiseMiddleware)(createStore)(reducer, initialState)

browserHistory.listen(location => {
	match({ routes, location }, (err, redirectLocation, renderProps) => {
		/*
		if (err) { 
			console.error(err)
	    	//return res.status(500).render('500')
	    }
	    
	    if (!renderProps) {
	    	console.log('404')
	    	//return res.status(404).render('404')
	    }

	    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
	    .then(() => {
	    	const initialState = store.getState()

	    	console.log("fetched data")
	    })
	    .catch(err => res.end(err.message))
	    */
	})
})

render(
	<Provider store={store}>
		<Router children={routes} history={browserHistory} />
	</Provider>,
	document.getElementById("root")
	)
