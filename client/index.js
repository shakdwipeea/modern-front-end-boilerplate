import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import configureStore from '../common/store/configureStore'
import App from '../common/containers/App'

import { match, Router, browserHistory } from 'react-router'
import routes from '../common/routes'

const initialState = window.__INITIAL_STATE__
const store = configureStore(initialState)
const rootElement = document.getElementById('app')

match({ history: browserHistory, routes: routes },
  (error, redirectLocation, renderProps) => {
  console.log(error, redirectLocation, renderProps);
  render(
    <Provider store={store}>
     <Router {...renderProps} />
    </Provider>,
    rootElement
  )
})

// render(
//   <Provider store={store}>
//     <Router routes={routes(store)} history={browserHistory} />
//   </Provider>,
//   rootElement
// )
