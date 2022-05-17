import React from "react"
import { Routes, Route } from "react-router-dom"
import { Helmet } from 'react-helmet'

import Navigation from "../../components/Navigation"
import Footer from "../../components/Footer"
import Blog from "../../articles/Blog"
import Article from "../../articles/Article"
import Category from "../../articles/Category"
import Tag from "../../articles/Tag"
import Writer from "../../articles/Writer"
import Home from "../../pages/Home"

function Site() {
  return (
    <>
      <Helmet>
        <html lang='en' />
        <title>Site</title>           
      </Helmet>
      <Navigation />
      <Routes>
        <Route path="/blog" element={<Blog />} exact />
        <Route path="/" element={<Home />} exact />
        <Route path="/article/:slug" element={<Article />} exact />
        <Route path="/writer/:slug" element={<Writer />} exact />
        <Route path="/category/:slug" element={<Category />} exact />
        <Route path="/tag/:slug" element={<Tag />} exact />
      </Routes>
      <Footer />
    </>
  )
}

export default Site
