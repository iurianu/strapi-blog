import React from "react"
import Posts from "../../components/Articles"
import Query from "../../components/Query"
import ARTICLES_QUERY from "../../queries/article/articles"

const Articles = () => {
  return (
    <main className="col-12 py-0 d-flex article-listing">
      <Query query={ARTICLES_QUERY}>
        {({ data: { articles } }) => {
          return <Posts articles={articles.data} />;
        }}
      </Query>
    </main>
  )
}

export default Articles