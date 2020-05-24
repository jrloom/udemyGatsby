import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const getData = graphql`
  {
    site {
      info: siteMetadata {
        person {
          age
          name
        }
        author
        data
        description
        title
      }
    }
  }
`

function Header() {
  const {
    site: {
      info: {
        title,
        person: { name },
      },
    },
  } = useStaticQuery(getData)

  return (
    <div>
      {/* <h1>title: {data.site.siteMetadata.title}</h1> */}
      {/* <h2>name: {data.site.siteMetadata.person.name}</h2> */}
      <h1>title: {title}</h1>
      <h2>name: {name}</h2>
    </div>
  )
}

export default Header
