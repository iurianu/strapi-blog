import React from "react"
import Query from "../Query"
import { Link } from "react-router-dom"

import CATEGORIES_QUERY from "../../queries/category/categories"

const Nav = () => {
  return (
    <>
      <nav className="col-12 d-flex flex-row mb-3" id="post-navigation">
        <Query query={CATEGORIES_QUERY} id={null}>
          {({ data: { categories } }) => {
            return (              
              <ul className="d-flex justify-content-start flex-row w-100 p-md-0">
                <li className="list-title">Categories:</li>
                {categories.data.map((category) => {
                  return (
                    <li key={category.attributes.slug}>
                      <Link
                        to={`/category/${category.attributes.slug}`}
                        className="link-reset"
                      >
                        {category.attributes.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>              
            );
          }}
        </Query>
      </nav>
    </>
  );
};

export default Nav