import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ApolloClient from "apollo-boost"
import { ApolloProvider } from "react-apollo"

import Home from './containers/Home'
import Games from './containers/Games'
import Categories from './containers/Categories'
import Players from './containers/Players'
import GameDetails from './containers/GameDetails'
import CategoryDetails from './containers/CategoryDetails'
import PlayerDetails from './containers/PlayerDetails'

const client = new ApolloClient({
  uri: "http://localhost:4000"
})

function App() {
  return (
  <ApolloProvider client={client}>
    <Router>
      <div>
        <Games />
        <Categories />
        <Players />

        <Route path="/" exact component={Home} />
        <Route path="/game/:id" component={GameDetails} />
        <Route path="/category/:id" component={CategoryDetails} />
        <Route path="/player/:id" component={PlayerDetails} />
      </div>
    </Router>
  </ApolloProvider>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
