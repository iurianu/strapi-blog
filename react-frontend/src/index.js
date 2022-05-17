import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router } from "react-router-dom"
import { ApolloProvider } from "@apollo/react-hooks"

import Site from "./pages/Site"

import client from "./utils/apolloClient"

import "./index.css"

ReactDOM.render(
  <Router>
    <ApolloProvider client={client}>
      <Site />
    </ApolloProvider>
  </Router>,
  document.getElementById("root")
)