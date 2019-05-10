import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import Home from './containers/Home'

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>

        <Route path="/" exact component={Home} />
      </div>
    </Router>
  )
}

var mountNode = document.getElementById("app");
ReactDOM.render(<App />, mountNode);
