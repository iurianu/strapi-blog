import React from "react"
import Card from "../Card"

const Posts = ({ articles }) => {

  return (
      <>
        <div className="article-listing row">
          {articles.map((article) => {
            return (
              <Card
                article={article}
                key={`article__${article.attributes.slug}`}
              />
            )
          })}  
          </div>  
      </>
  )
}

export default Posts