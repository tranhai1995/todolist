/* eslint-disable no-unused-expressions */
import React, { Component } from 'react'
import './App.css'
import shoppingCart from './containers/shoppingCart'
import Click from './components/Click'
import { BrowserRouter as Router, Route,Link} from 'react-router-dom'
import TrafficLight from './containers/TrafficLight'

export default class App extends Component {
  render() {
    return (
    <Router>
      <div>
        <Route exact path="/shoppingCart" component={shoppingCart} />
        <Route exact path="/Click" component={Click} />
        <Route exact path="/TrafficLight" component={TrafficLight} />
        <div className="container text-center">
          <button className="btn btn-danger ">
            <Link to="/shoppingCart">Shopping</Link>
          </button>
          <button className="btn btn-danger ml-4">
            <Link to="Click">TicTac</Link>
          </button>
          <button className="btn btn-danger ml-4">
            <Link to="TrafficLight">TrafficLight</Link>
          </button>
        </div>
      </div>
      </Router>
    )
  }
}

