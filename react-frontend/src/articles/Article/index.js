import React from "react"
import { Helmet } from 'react-helmet'
import { useParams } from "react-router"
import Query from "../../components/Query"
import ReactMarkdown from "react-markdown"
import rehypeRaw from 'rehype-raw'
import Moment from "react-moment"
import Nav from "../../components/Nav"
import ARTICLE_QUERY from "../../queries/article/article.js"

const Article = () => {
  let { slug } = useParams()

  return (
    <>
    
      <Nav />

      <Query query={ARTICLE_QUERY} slug={slug}>
        {({ data: { articles } }) => {
          if (articles.data.length) {

            const serverUrl = articles.data[0].attributes,
                  imageUrl  = serverUrl.image.data.attributes.url,
                  contents  = serverUrl.content

            return (
              <article className="col-12">
                <Helmet>
                  <html lang='en' itemScope itemType="http://schema.org/Article" />
                  <title>iurianu about {serverUrl.category.data.attributes.name} » {serverUrl.title}</title>           
                  <link rel="stylesheet" href="./../lib/styles/post.css" />
                </Helmet>

                <section className="hero container-fluid d-flex">
                  <figure className="col-12 col-sm-5 col-md-4" id="banner" 
                          itemScope itemType="http://schema.org/ImageObject" 
                          itemProp="associatedMedia"
                  >
                    <img itemProp="image" src={imageUrl} alt={serverUrl.title} />       
                    <meta itemProp="description" content={serverUrl.title} />
                    <link itemProp="url" href={imageUrl} />
                  </figure>  

                  <h1 className="col-12 col-sm-7 col-md-8 d-flex flex-column justify-content-center text-left" itemProp="name">
                  iurianu about {serverUrl.category.data.attributes.name} <br/>» {serverUrl.title}
                  </h1>

                </section>

                <section itemProp="text" className="container-fluid article-text-content">
                  <ReactMarkdown children={contents} rehypePlugins={[rehypeRaw]} />
                  <span className="date d-block pb-2"> Last updated on:&nbsp;
                    <em itemProp="dateModified sdDatePublished">
                      <Moment format="MMM Do YYYY">{serverUrl.published_at}</Moment>
                    </em>
                  </span>
                </section>

                <section className="container-fluid" id="tag-section">
                  <ul className="w-100 d-flex flex-row p-0">
                    <li className="headline"><strong>Keywords:</strong></li>
                    {serverUrl.tags.data.map((tag, key) =>                      
                      <li key={key} itemProp="keywords" className="d-inline-block">
                        <a href={'../tag/' + tag.attributes.slug}>
                          {tag.attributes.name}
                        </a>
                      </li>
                    )}                 
                  </ul>
                </section>

              </article>
              
            );
          }
        }}
      </Query>

    </>
  )
}

export default Article