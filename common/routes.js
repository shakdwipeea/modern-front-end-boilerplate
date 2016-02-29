import React from 'react'
import { IndexRoute, Route } from 'react-router'
import { App, Home, About } from './components'

// export default (store) => {
//   return (
//       <Route path="/" component={App} >
//         <IndexRoute component={Home} />
//         <Route path="/about" component={About} />
//       </Route>
//   )
// }

export default (
  <Route path="/" component={App} >
    <IndexRoute component={Home} />
    <Route path="/about" component={About} />
  </Route>
)

// export default routes;
