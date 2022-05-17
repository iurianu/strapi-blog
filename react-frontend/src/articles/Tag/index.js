import React from "react"
import { useParams } from "react-router"
import Articles from "../../components/Articles"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import Query from "../../components/Query";
import TAGS_ARTICLES_QUERY from "../../queries/tag/articles"
import { Helmet } from 'react-helmet'

const Tag = () => {
  let { slug } = useParams();

  return (

      <Query query={TAGS_ARTICLES_QUERY} slug={slug}>
        {({ data: { tags } }) => {
          if (tags.data.length) {
            return (
              <main className="d-flex mx-0">

                <Helmet>
                  <html lang='en' itemScope itemType="http://schema.org/Blog" />
                  <title>iurianu about {tags.data[0].attributes.name}</title>           
                  <link rel="stylesheet" href="./../lib/styles/blog.css" />
                </Helmet>

                <h1 itemProp="name" className="col-sm-6">iurianu about <br />
                    <span itemProp="about">{tags.data[0].attributes.name}</span>
                </h1>

                <blockquote id="category-description" className="p-3 col-sm-6 d-flex align-items-center" itemProp="description">
                  <ReactMarkdown children={tags.data[0].attributes.description} rehypePlugins={[rehypeRaw]} />
                </blockquote>

                <Articles articles={tags.data[0].attributes.articles.data} />

              </main>
            );
          }
        }}
      </Query>
  );
};

export default Tag;