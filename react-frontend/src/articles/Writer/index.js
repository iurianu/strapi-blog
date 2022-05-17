import React from "react"
import { useParams } from "react-router"
import Articles from "../../components/Articles"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import Query from "../../components/Query";
import WRITERS_ARTICLES_QUERY from "../../queries/writer/articles"
import { Helmet } from 'react-helmet'

const Writer = () => {
  let { slug } = useParams();

  return (

      <Query query={WRITERS_ARTICLES_QUERY} slug={slug}>
        {({ data: { writers } }) => {
          if (writers.data.length) {
            return (
              <main className="d-flex mx-0">

                <Helmet>
                  <html lang='en' itemScope itemType="http://schema.org/ProfilePage" />
                  <title>Articles by {writers.data[0].attributes.name}</title>           
                  <link rel="stylesheet" href="./../lib/styles/blog.css" />
                </Helmet>

                <h1 itemProp="name" className="col-sm-6">
                    <span itemProp="about">{writers.data[0].attributes.name}</span>
                </h1>

                <blockquote id="category-description" className="p-3 col-sm-6 d-flex align-items-center" itemProp="description">
                  <ReactMarkdown children={writers.data[0].attributes.description} rehypePlugins={[rehypeRaw]} />
                </blockquote>

                <Articles articles={writers.data[0].attributes.articles.data} />

              </main>
            );
          }
        }}
      </Query>
  );
};

export default Writer;