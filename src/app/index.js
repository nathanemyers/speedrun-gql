import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import Home from './containers/Home'
import Games from './containers/Games'
import GameDetails from './containers/GameDetails'


const client = new ApolloClient({
  uri: "http://localhost:4000"
})

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Games />

        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={GameDetails} />
      </div>
    </Router>
  </ApolloProvider>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
