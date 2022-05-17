import React from "react"
import { Helmet } from 'react-helmet'

import Articles from "../Articles"
import Nav from "../../components/Nav"

function Blog() {
    return (
      <>
        <Helmet>
          <html lang='en' itemScope itemType="http://schema.org/Blog" />
          <title>iurianu online</title>           
          <link rel="stylesheet" href="./../lib/styles/blog.css" />
        </Helmet>

        <h1 className="col-12">iurianu online</h1>

        <Nav />
        <Articles />        

      </>
    )
  }
  
  export default Blog