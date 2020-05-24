import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"

// ! Page Queries can only be used in files in the PAGES directory
// ? useStaticQuery() can be used in files in either components or pages directories

const PageQuery = ({ data }) => {
  // console.log(props)
  const {
    site: {
      info: { author },
    },
  } = data

  return (
    <Layout>
      <h1>Page Query Example</h1>
      <h5>author: {author}</h5>
    </Layout>
  )
}

export const data = graphql`
  query MyQuery {
    site {
      info: siteMetadata {
        title
        description
        author
        data
        person {
          name
          age
        }
      }
    }
  }
`
export default PageQuery
