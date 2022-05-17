import React from "react"
import { Link } from "react-router-dom"

const Card = ({ article }) => {
  const imageUrl = article.attributes.image.data.attributes.url

  return (
    
      <article className="card mb-2" itemProp="blogPost" itemScope itemType="http://schema.org/BlogPosting">
        <figure className="card-banner" itemScope itemProp="associatedMedia" itemType="http://schema.org/ImageObject">
          <Link to={`/article/${article.attributes.slug}`} className="link-reset d-block" itemProp="url">
            <img itemProp="image" src={imageUrl} alt={article.attributes.image.url} height="100" />
          </Link>
        </figure>
        <div className="card-body d-flex flex-column justify-content-between">
          <p className="title mb-0" itemProp="name">
            <Link to={`/article/${article.attributes.slug}`} className="link-reset" itemProp="url">
              {article.attributes.title}
            </Link>
          </p>          
          <p className="category mt-1 pt-1"> Category:&nbsp;
              <Link to={`/category/${article.attributes.category.data.attributes.slug}`} 
                    className="link-reset d-inline-block" 
                    itemProp="articleSection"
              >
                {article.attributes.category.data.attributes.name}
              </Link>
            <link itemProp="url" href={`/article/${article.attributes.slug}`} />
          </p>
        </div>
      </article>
    
  )
}

export default Card