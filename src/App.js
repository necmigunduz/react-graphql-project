import React, { Component } from 'react'
import './App.css';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "[Insert URI of GraphQL endpoint]"
});

export default class App extends Component {
  render() {
    return (
      <div>
        
      </div>
    )
  }
}

