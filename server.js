import fp from "path"
import fs from "fs"

import express from "express"
import hbs from "express-hbs"
import bunyan from "bunyan"
import React from "react"
import { renderToString } from "react-dom/server"
import { RouterContext, match } from "react-router"
import { createLocation } from "history/lib/LocationUtils"
import { createStore, combineReducers } from "redux"
import { Provider } from "react-redux"
import routes from "./app/routes"
import fetchComponentData from "./app/lib/fetchComponentData"
import Handlebars from "handlebars"
import ItemReducer from "./app/reducers/ItemReducer"

const app = express()

const log = bunyan.createLogger({
  name: 'webpack-react',
  level: 'trace'
})

app.set('view engine', 'hbs')
app.set('views', fp.join(__dirname, 'templates'))

app.engine('hbs', hbs.express4({
  //partialsDir: fp.join(__dirname, 'templates', 'partials')
}))

app.use(express.static('public'))

app.use("/*", (req, res) => {
  const location = createLocation(req.originalUrl)

  const reducer = combineReducers([ItemReducer])
  const store = createStore(reducer)

  match({ routes, location }, (err, redirectLocation, renderProps) => {
    if (err) { 
      log.error(err)
      return res.status(500).render('500')
    }
    
    if (!renderProps)
    	return res.status(404).render('404')

    const InitialComponent = (
      <Provider store={store}>
        <RouterContext {...renderProps} />
      </Provider>
    )

    const initialState = store.getState()
    const initialStateHtml = `<script>window.__INITIAL_STATE__ = ${JSON.stringify(initialState)};</script>`

    const componentHTML = renderToString(InitialComponent)

    log.debug(initialState)

    fetchComponentData(store.dispatch, renderProps.components, renderProps.params)
      .then(() => {
        res.render('app', {
          content: componentHTML,
          initialState: initialStateHtml
        })
      })
      .catch(err => res.end(err.message))
  })
})

export default app
